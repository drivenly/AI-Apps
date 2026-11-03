( function ( $ ) {
	'use strict';

	var SHORTCUTS = {
		'alt+ctrl+g': { elType: 'e-div-block', title: 'groupDiv' },
		'shift+a': { elType: 'e-flexbox', title: 'groupFlex' },
	};

	var MESSAGES = {
		pt: {
			groupDiv: 'Agrupar em Div block',
			groupFlex: 'Agrupar em Flexbox',
			noAtomic: 'Ative os elementos atômicos do Elementor (V4) para usar este atalho.',
			sameLevel: 'Selecione apenas elementos que estejam no mesmo nível.',
			structural: 'Esses elementos fazem parte da estrutura de outro elemento e não podem ser agrupados.',
		},
		en: {
			groupDiv: 'Group in Div block',
			groupFlex: 'Group in Flexbox',
			noAtomic: 'Turn on Elementor\'s atomic elements (V4) to use this shortcut.',
			sameLevel: 'Select only elements that are on the same level.',
			structural: 'These elements are part of another element\'s structure and can\'t be grouped.',
		},
	};

	function t( key ) {
		var locale = ( elementor.config && elementor.config.locale ) || document.documentElement.lang || '';
		var lang = 0 === locale.toLowerCase().indexOf( 'pt' ) ? 'pt' : 'en';

		return MESSAGES[ lang ][ key ];
	}

	function warn( key ) {
		elementor.notifications.showToast( { message: t( key ) } );
	}

	function getIndex( container ) {
		return container.parent.model.get( 'elements' ).indexOf( container.model );
	}

	function getTypeConfig( container ) {
		var model = container.model;

		return elementor.widgetsCache[ model.get( 'widgetType' ) || model.get( 'elType' ) ] || {};
	}

	// Partes internas de tabs, acordeões etc. são travadas e não podem sair do lugar.
	function isStructural( container ) {
		var elType = container.model.get( 'elType' );
		var meta = getTypeConfig( container ).meta || {};

		return 'section' === elType || 'column' === elType || !! container.model.get( 'isLocked' ) || !! meta.permanently_locked;
	}

	function acceptsChild( parent, elType ) {
		if ( 'section' === parent.model.get( 'elType' ) ) {
			return false;
		}

		var allowed = getTypeConfig( parent ).allowed_child_types;

		return ! allowed || ! allowed.length || -1 !== allowed.indexOf( elType );
	}

	function canGroup( event ) {
		if ( ! elementor.selection.getElements().length ) {
			return false;
		}

		// Ao selecionar vários elementos, o Elementor deixa o foco na busca de widgets do painel.
		if ( elementor.selection.isMultiple() && 'elementor-panel-elements-search-input' === event.target.id && ! event.target.value ) {
			return true;
		}

		var $target = $( event.target );

		return ! $target.is( ':input, .elementor-input' ) && ! $target.closest( '[contenteditable="true"]' ).length;
	}

	function groupSelection( shortcut ) {
		if ( ! elementor.selection.isAllowed() ) {
			return;
		}

		var selected = elementor.selection.getElements();

		if ( ! selected.length ) {
			return;
		}

		if ( ! elementor.widgetsCache[ shortcut.elType ] ) {
			warn( 'noAtomic' );
			return;
		}

		var parent = selected[ 0 ].parent;

		var sameParent = selected.every( function ( container ) {
			return container.parent === parent;
		} );

		if ( ! sameParent ) {
			warn( 'sameLevel' );
			return;
		}

		if ( selected.some( isStructural ) || ! acceptsChild( parent, shortcut.elType ) ) {
			warn( 'structural' );
			return;
		}

		// A seleção guarda a ordem dos cliques; o grupo deve seguir a ordem das camadas.
		var ordered = selected.slice().sort( function ( a, b ) {
			return getIndex( a ) - getIndex( b );
		} );

		var logId = $e.internal( 'document/history/start-log', {
			type: 'add',
			title: t( shortcut.title ),
		} );

		try {
			$e.run( 'document/elements/deselect-all' );

			var wrapper = $e.run( 'document/elements/create', {
				container: parent,
				model: {
					id: elementorCommon.helpers.getUniqueId().toString(),
					elType: shortcut.elType,
				},
				options: {
					at: getIndex( ordered[ 0 ] ),
					edit: false,
				},
			} );

			ordered.forEach( function ( container ) {
				$e.run( 'document/elements/move', {
					container: container,
					target: wrapper.lookup(),
					options: { edit: false },
				} );
			} );

			$e.run( 'document/elements/select', { container: wrapper.lookup() } );
		} finally {
			$e.internal( 'document/history/end-log', { id: logId } );
		}
	}

	function registerShortcuts() {
		Object.keys( SHORTCUTS ).forEach( function ( keys ) {
			$e.shortcuts.register( keys, {
				dependency: canGroup,
				allowAltKey: true,
				callback: function () {
					groupSelection( SHORTCUTS[ keys ] );
				},
			} );
		} );
	}

	// Este arquivo pode carregar antes ou depois do evento de início do editor.
	if ( window.$e && $e.shortcuts ) {
		registerShortcuts();
	} else {
		$( window ).one( 'elementor:init', registerShortcuts );
	}
}( jQuery ) );
