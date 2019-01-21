$( function() {

    $( '.popup' ).each(function(){
        new Popup($(this));
    } );

} );

var Popup = function( obj ){
    //private properties
    var _self = this,
        _btnShow =  $( '.popup__open' ),
        _obj = obj,
        _popupWrap = _obj.find( '.popup__wrap' ),
        _popupContents = _obj.find( '.popup__content' ),
        _btnClose = _obj.find( '.popup__close, .popup__cancel' ),
        _siteHeader = $( '.site__header-layout' ),
        _videoFile, _productContent,
        _scrollConteiner = $( 'html' ),
        _body = $( 'body' ),
        _site = _body.find( '.site' ),
        _url = _body.data( 'action' ),
        _position = 0, _isOpen = false,
        _window = $( window ),
        _request = new XMLHttpRequest();

    //private methods
    var _getScrollWidth = function (){
            var scrollDiv = document.createElement( 'div'),
                scrollBarWidth;

            scrollDiv.className = 'popup__scrollbar-measure';

            document.body.appendChild( scrollDiv );

            scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

            document.body.removeChild(scrollDiv);

            return scrollBarWidth;

        },
        _hidePopup = function(){

            _isOpen = false;

            _obj.addClass( 'is-hide' ).removeClass( 'is-opened' );

            _obj.on( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {

                _scrollConteiner.removeAttr( 'style' );
                _body.removeAttr( 'style' );
                _site.removeAttr( 'style' );
                _siteHeader.removeAttr( 'style' );
                _obj.removeAttr( 'style' );

                _window.scrollTop( _position );
                _position = 0;

                _obj.removeClass( 'is-hide' );

                if ( _videoFile != null ) {
                    _videoFile.remove();
                    _videoFile = null;
                }

                if ( _productContent != null ) {
                    _productContent.empty();
                    _productContent = null;
                }

                _obj.addClass( 'is-loading' );

                _obj.off( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend' );

            } );

        },
        _onEvents = function(){

            _obj.on( 'click', function ( e ) {

                if ( $( e.target ).closest( _popupContents ).length === 0 ){
                    _hidePopup();
                }

            } );

            _btnShow.on( 'click', function() {

                var curBtn = $( this );

                _showPopup( curBtn );
                return false;
            } );

            _btnClose.on( 'click', function(){
                _hidePopup();
                return false;
            } );

        },
        _showPopup = function( btn ){

            _isOpen = true;

            _setPopupContent( btn );

            if ( _window.scrollTop() !== 0 ){
                _position = _window.scrollTop();
            }

            _scrollConteiner.css( {
                overflowY: 'hidden',
                paddingRight: _getScrollWidth()
            } );

            _body.css( 'overflow-y', 'hidden' );

            _site.css( {
                'position': 'relative',
                'top': _position * -1
            } );

            if ( _popupWrap.outerHeight() <= _window.outerHeight() ) {
                _obj.css( {
                    paddingRight: _getScrollWidth()
                } );
            }

            _obj.addClass( 'is-opened' );

        },
        _setPopupContent = function( btn ){

            var curBtn = btn,
                className = curBtn.data( 'popup' ),
                curContent = _popupContents.filter( '.popup_' + className );

            _popupContents.css( { display: 'none' } );
            curContent.css( { display: 'block' } );

            if ( className === 'join-us-video' ) { _setVideoFile( curBtn.data( 'video' ), curContent ) }
            if ( className === 'product' ) { _setAJAXRequest( curBtn.data( 'id' ), curContent ) }
            if ( className === 'delete-account' ) { _onEventDeleteAccount( curBtn.data( 'id' ), curContent ) }

        },
        _setVideoFile = function ( id, obj ) {

            var curContent = obj;

            curContent.append( '<iframe src="https://www.youtube.com/embed/'+ id +'?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' );

            _videoFile = curContent.find( 'iframe' );

            _videoFile.on( 'load', function () {
                _setVideoSize();
                _obj.removeClass( 'is-loading' );
            } );

            _window.on( 'resize', function () {
                _setVideoSize();
            } );

        },
        _setVideoSize = function () {

            var videoWidth = _videoFile.outerWidth();

            _videoFile.css( 'height', videoWidth / 1.7777 + 'px' );

        },
        _setAJAXRequest = function ( id, obj ) {

            _request = $.ajax( {
                url: _url,
                data: {
                    action: 'get_variable_product_for_adding_to_cart',
                    id: id
                },
                dataType: 'JSON',
                timeout: 20000,
                type: 'POST',
                success: function ( data ) {
                    _setProductPopup( data, obj );
                },
                error: function ( XMLHttpRequest ) {
                    if ( XMLHttpRequest.statusText != "abort" ) {
                        console.error( 'err' );
                    }
                }
            } );

        },
        _onEventDeleteAccount = function ( id, obj ) {

            var curPopup = obj,
                btnDeleteAccount = curPopup.find( '.btn-delete' );

            btnDeleteAccount.on( 'click', function () {

                curPopup.addClass( 'is-loading' );

                _request = $.ajax( {
                    url: _url,
                    data: {
                        action: 'delete_my_account',
                        user_id: btnDeleteAccount.attr( 'data-id' )
                    },
                    dataType: 'JSON',
                    timeout: 20000,
                    type: 'POST',
                    success: function ( data ) {

                        if ( data.status == 'success' ){
                            window.location.replace('/');
                        } else {
                            curPopup.removeClass( 'is-loading' );
                            curPopup.find( '.popup__delete-text' ).html( '<p>Sorry</p><p>You can\'t delete your account. Write to your administrator.</p>' )
                        }

                    },
                    error: function ( XMLHttpRequest ) {
                        if ( XMLHttpRequest.statusText != "abort" ) {
                            console.error( 'err' )
                        }
                    }
                } );

            } )

        },
        _setProductPopup = function ( data, obj ) {

            _productContent = obj.find( '.popup__product-wrap' );

            var popupData = data,
                popupPrice = $( popupData.price ).text(),
                popupOption = popupData.variations,
                popupOptionTotal = popupOption.length,
                popupContent = $( '<div class="book">' +
                '<div class="book__picture js-back-picture"></div>' +
                '<div class="book__info article">' + popupData.text +
                '<div class="book__language"></div>' +
                '<div class="book__footer">' +
                '<a href="#" class="btn btn_color-2 btn_type-sale ajax-add-to-cart close-popup" data-id="'+ popupOption[0].id +'"><span>Add to Cart - <strong>'+ popupPrice +'</strong></span></a>' +
                '</div></div></div>' );

            _productContent.html( popupContent );

            for ( var i = 0; i <= popupOptionTotal - 1; i++ ){

                _productContent.find( '.book__picture' ).append( '<img src="'+ popupOption[i].image +'" alt="'+ popupOption[i].title +'" data-id="'+ popupOption[i].id +'">' )
                _productContent.find( '.book__language' ).append( '<label><input type="radio" value="'+ popupOption[i].id +'" name="language"><span>'+ popupOption[i].title +'</span></label>' )

                if ( i + 1 == popupOptionTotal ) {

                    new AddToCart ( _productContent.find( '.ajax-add-to-cart' ) );
                    new BackPictureFullSize ( _productContent.find( '.js-back-picture' ) );
                    new ChangeBookLanguage ( popupContent );

                    _obj.removeClass( 'is-loading' );

                }

            }

        },
        _construct = function(){

            _onEvents();
            _obj[ 0 ].obj = _self;

        };

    //public properties

    //public methods
    _self.openPopup = function ( obj ) {

        var curBtn = obj;

        _showPopup( curBtn );

    };
    _self.closePopup = function () {
        if ( _isOpen ){
            _hidePopup();
        }
    };

    _construct();

};