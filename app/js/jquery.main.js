$( function () {

    "use strict";

    new Preloader( $( '.preload' ) );

    new  FixHeader( $( '.site__header' ) );

    new  MobileMenu( $( '.menu' ) );

    $.each( $( '.ajax-add-to-cart' ), function() {
        new AddToCart ( $( this ) );
    } );

    $.each( $( '.youtube-frame' ), function() {
        new SetSizeIframe ( $( this ) );
    } );

    $.each( $( '.blog-article iframe' ), function() {
        new SetSizeIframe ( $( this ) );
    } );

    $.each( $( '.hero' ), function() {
        new InitSlider ( $( this ) );
    } );

    $.each( $( '.book' ), function() {
        new ChangeBookLanguage ( $( this ) );
    } );

    $.each( $( '.search' ), function() {
        new SearchForm ( $( this ) );
    } );

    $.each( $( '.orders' ), function() {
        new InitTableScroll ( $( this ) );
    } );

    $.each( $( '.success-stories' ), function() {
        new InitSlider ( $( this ) );
    } );

    $.each( $( '.recipe-books-promo' ), function() {
        new InitSlider ( $( this ) );
    } );

    $.each( $( '.mobile-app' ), function() {
        new InitSlider ( $( this ) );
    } );

    $.each( $( '.join-us' ), function() {
        new InitJoinUsSlider ( $( this ) );
    } );

    $.each( $( '#auto-load.free-recipes' ), function() {
        new FreeRecipesSection ( $( this ) );
    } );

    $.each( $( '.js-back-picture' ), function() {
        new BackPictureFullSize ( $( this ) );
    } );

    $.each( $( '.site__deco' ), function() {
        new SiteDeco ( $( this ) );
    } );

    $.each( $( '.categories' ), function() {
        new InitScroll ( $( this ) );
    } );

    $.each( $( '.blog' ), function() {
        new Blog ( $( this ) );
    } );

    $.each( $( '.book__gallery' ), function() {
        new BookGallery ( $( this ) );
    } );

    $.each( $( '.tabs' ), function() {
        new Tabs( $( this ) );
    } );

    $.each( $( '.blog__item-share' ), function() {
        new InitSocialShare( $( this ) );
    } );

    $.each( $( '.social-share' ), function() {
        new InitSocialShare( $( this ) );
    } );

    $.each( $( '.faq-wrap' ), function() {
        new OpenItems( $( this ) );
    } );

    $.each( $( '.cart-list' ), function() {
        new CartList( $( this ) );
    } );

    $.each( $('.authorization-form__warning'), function () {
        new AuthorizationFormWarning( $(this) );
    } );

    $.each( $('.hero-account'), function () {
        new TrueUser( $(this) );
    } );

    $.each( $('.stars'), function () {
        new Stars( $(this) );
    } );

    $.each( $('.reviews'), function () {
        new ReviewsItems( $(this) );
    } );

    $.each( $('.flash-sales'), function () {
        new OfferTimer( $(this) );
    } );

} );

var AddToCart = function( obj ){

    //private properties
    var _obj = obj,
        _url = $( 'body' ).data( 'action' ),
        _request = new XMLHttpRequest(),
        _timer, _delay = 1000;

    //private methods
    var _construct = function(){
            _onEvent();
        },
        _onEvent = function(){

            _obj.on( 'click', function () {
                _disabledBtn();
                return false;
            } );

        },
        _disabledBtn = function () {

            _obj.addClass( 'is-loading' );
            _obj.append( '<span class="btn__loader"><span></span></span>' );

            _ajaxSend();

        },
        _ajaxSend = function(){

            _request = $.ajax( {
                url: _url,
                dataType: 'json',
                timeout: 20000,
                type: "POST",
                data: {
                    action: 'add_to_cart_book',
                    id: _obj.attr( 'data-id' )
                },
                success: function ( data ) {

                    _showSuccessMessage();
                    BasketUpdate( data.result );

                },
                error: function (XMLHttpRequest) {
                    if (XMLHttpRequest.statusText != 'abort') {
                        alert(XMLHttpRequest.statusText);
                    }
                }
            } );

        },
        _showSuccessMessage = function () {

            _obj.removeClass( 'is-loading' ).addClass( 'is-success' );
            _obj.find( '.btn__loader' ).remove();

            _obj.append( '<span class="btn__success"><svg stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"/><polyline points="23 3 12 14 9 11"/></svg></span>' );

            _timer = setTimeout( function () {

                _obj.removeClass( 'btn_type-sale ajax-add-to-cart is-success' ).addClass( 'btn_type-sold' );
                _obj.find( '.btn__success' ).remove();
                _obj.append( '<span>Already in cart</span>' );
                _obj.off( 'click' );

                if (  _obj.hasClass( 'close-popup') ){
                    $( '.popup' )[0].obj.closePopup();
                }

                clearTimeout( _timer );
            }, _delay );

        };

    //public properties

    //public methodsJOIN US ON YOUTUB

    _construct();

};

var AuthorizationFormWarning = function( obj ){

    //private properties
    var _obj = obj,
        _btnClose = _obj.find( '.btn' );

    //private methods
    var _construct = function(){
            _checkUser();
            _onEvent();
        },
        _onEvent = function(){

            _btnClose.on( 'click', function () {
                _obj.addClass( 'is-hide' );

                _obj.on( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                    _obj.remove();
                    localStorage.setItem( 'trueUser', true )
                } );

            } );

        },
        _checkUser = function () {

            var trueUser = localStorage.getItem( 'trueUser' );

            if ( trueUser ){
                _obj.remove();
            }

        };

    //public properties

    //public methods

    _construct();

};

var BasketUpdate = function ( data ) {

    var _data = $( data ),
        _newAmount = _data.text(),
        _newSymbol = _newAmount.slice(0,1),
        _newTotal = _newAmount.substring(1),
        _basketWrap = $( '.basket' ),
        _basketLayout = _basketWrap.find( '.basket__wrap' ),
        _totalWrap = _basketWrap.find( '.basket__amount' ),
        _timer;

    //private methods
    var _construct = function(){
            _appendNumber();
        },
        _appendNumber = function () {

            if ( _totalWrap.length > 0 ){

                if ( _newTotal > 0 ){

                    var duration = 500,
                        i = +( _totalWrap.text().substring(1) ),
                        stepTime = Math.abs( Math.floor( duration / Math.abs( _newTotal - i ) ) ),
                        timer;

                    if ( _newTotal > i ) {

                        _totalWrap.addClass( 'is-growing' );

                        timer = setInterval( function() {

                            i = i + 1;

                            _totalWrap.html( _newSymbol +''+  i );

                            if ( i == _newTotal ) {
                                clearInterval( timer );
                                _totalWrap.removeClass( 'is-growing' );
                            }

                        }, stepTime );

                    } else if ( _newTotal < i ) {

                        timer = setInterval( function() {

                            i = i - 1;

                            _totalWrap.html( _newSymbol +''+  i );

                            if ( i == _newTotal ) {
                                clearInterval( timer );
                            }

                        }, stepTime );

                    }

                } else {

                    _basketWrap.css( 'width', _basketWrap.outerWidth() );

                    _totalWrap.addClass( 'is-hide' );

                    _totalWrap.on( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                        _totalWrap.remove();
                        _totalWrap.off( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend' );
                        _basketWrap.css( 'width', _basketLayout.outerWidth() );
                    } );

                }

            } else {

                _basketWrap.css( 'width', _basketWrap.outerWidth() );

                _basketLayout.append( '<span class="basket__amount is-hide">'+ _newSymbol +''+ _newTotal +'</span>' );

                _basketWrap.css( 'width', _basketLayout.outerWidth() );
                _totalWrap = _basketWrap.find( '.basket__amount' );

                _timer = setTimeout( function () {
                    _totalWrap.removeClass( 'is-hide' ).addClass( 'is-growing' );

                    _totalWrap.on( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                        _totalWrap.removeClass( 'is-growing' );
                        clearTimeout(_timer);
                        _totalWrap.off( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend' );
                    } );

                }, 100 );

            }

        };

    //public properties

    //public methods

    _construct();

};

var BackPictureFullSize = function ( obj ) {

    var _obj = obj,
        _backgroundPicture = _obj.find( 'img' ),
        _window = $( window );

    var _onEvents = function() {

            _window.on( 'resize', function () {
                _setFullSize();
            } );

            _backgroundPicture.on( 'load', function () {
                _setFullSize();
            } );

        },
        _setFullSize = function () {

            _backgroundPicture.removeAttr( 'style' );

            var frameWidth = _obj.outerWidth(),
                frameHeight = _obj.outerHeight(),
                pictureWidth = _backgroundPicture.outerWidth(),
                pictureHeight = _backgroundPicture.outerHeight();

            if ( pictureWidth < frameWidth ){
                _backgroundPicture.css( {
                    'width': '100%',
                    'height': 'auto'
                } )
            } else if ( pictureHeight < frameHeight ) {
                _backgroundPicture.css( {
                    'width': 'auto',
                    'height': frameHeight
                } )
            }

        },
        _construct = function() {
            _onEvents();
            _setFullSize();
        };

    _construct()
};

var Blog = function ( obj ) {

    var _obj = obj,
        _blogWrap = _obj.find( '.blog__wrap' ),
        _blogList = _blogWrap.find( '.blog__list' ),
        _categoryList = $( '.categories' ),
        _categoryItem = _categoryList.find( '.categories__item' ),
        _currentId = _categoryItem.eq(0).data( 'id' ),
        _currentPage = 1,
        _maxPage = 1,
        _canSendRequest = true,
        _url = $( 'body' ).data( 'action' ),
        _request = new XMLHttpRequest(),
        _window = $( window ),
        _monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

    var _onEvents = function() {

            _window.on( 'scroll', function () {
                if ( _window.scrollTop() + _window.height() >= _blogWrap.offset().top + _blogWrap.outerHeight() - 10 ) {
                    _loadData();
                }
            } );

            _categoryItem.on( 'click', function () {
                _changeCategory( $(this) );
                return false;
            } );

        },
        _changeCategory = function ( obj ) {

            _currentPage = 1;
            _maxPage = 1;

            _categoryItem.removeClass( 'is-active' );
            obj.addClass( 'is-active' );

            _blogList.empty();

            _currentId = obj.data( 'id' );

            localStorage.setItem( 'blogCategory', _currentId );

            _loadData();

        },
        _setBlogItem = function ( data ) {

            var blogItem = data,
                blogItemAuthor = blogItem.author,
                blogItemLink = blogItem.link,
                blogItemImage = blogItem.image,
                blogItemTitle = blogItem.title,
                blogItemContent = blogItem.content,
                blogItemTag = blogItem.tag,
                blogItemDate = blogItem.date,
                dateArr = blogItemDate.split('-'),
                frameItem;

            frameItem = '<article class="blog__item is-new">' +
                '<a href="'+ blogItemLink +'" class="blog__item-image js-back-picture">' +
                '<img src="'+ blogItemImage +'" alt="'+ blogItemTitle +'">' +
                '</a>' +
                '<div class="blog__item-content article">' +
                '<div class="blog__item-author">By '+ blogItemAuthor +'</div>' +
                '<div class="blog__item-category">'+ blogItemTag +'</div>\n' +
                '<h2 class="blog__item-title"><a href="'+ blogItemLink +'">'+ blogItemTitle +'</a></h2>\n' +
                '<div class="blog__item-text">'+ blogItemContent +'</div>' +
                '<div class="blog__item-share" data-social=\'' +
                '{"title": "'+ escape( blogItemTitle ) +'", "image": "'+ blogItemImage +'", "text": "'+ escape(blogItemContent) +'", "url": "'+ blogItemLink +'"}\'>' +
                '<a href="#" class="blog__item-share-link s_facebook" rel="nofollow">' +
                '<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
                '<g transform="translate(-160.000000, -2933.000000)" fill-rule="nonzero"><g transform="translate(160.000000, 2933.000000)"><g><g>' +
                '<path d="M17.87472,0 C8.01864,0 0,8.01864 0,17.87472 C0,27.73008 8.01864,35.74944 17.87472,35.74944 C27.73008,35.74944 35.74944,27.73008 35.74944,17.87472 C35.74944,8.01864 27.73152,0 17.87472,0 Z M22.32,18.504 L19.41192,18.504 C19.41192,23.15016 19.41192,28.86912 19.41192,28.86912 L15.10272,28.86912 C15.10272,28.86912 15.10272,23.2056 15.10272,18.504 L13.05432,18.504 L13.05432,14.84064 L15.10272,14.84064 L15.10272,12.47112 C15.10272,10.77408 15.90912,8.12232 19.45152,8.12232 L22.64472,8.13456 L22.64472,11.69064 C22.64472,11.69064 20.70432,11.69064 20.32704,11.69064 C19.94976,11.69064 19.41336,11.87928 19.41336,12.68856 L19.41336,14.84136 L22.69656,14.84136 L22.32,18.504 Z"></path>' +
                '</g></g></g></g></g></svg></a>' +
                '<a href="#" class="blog__item-share-link s_twitter" rel="nofollow">' +
                '<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
                '<g transform="translate(-931.000000, -10453.000000)" fill-rule="nonzero"><g transform="translate(-138.000000, 8602.000000)">'+
                '<g transform="translate(265.000000, 1668.000000)"><g transform="translate(0.000000, 11.000000)"><g transform="translate(0.000000, 127.000000)">'+
                '<g transform="translate(774.000000, 45.000000)"><g transform="translate(30.000000, 0.000000)"><g>'+
                '<path d="M27.80512,0 C12.47344,0 0,12.47344 0,27.80512 C0,43.13568 12.47344,55.61024 27.80512,55.61024 C43.13568,55.61024 55.61024,43.13568 55.61024,27.80512 C55.61024,12.47344 43.13792,0 27.80512,0 Z M40.20912,21.44128 C40.22144,21.7168 40.22816,21.99456 40.22816,22.27232 C40.22816,30.72944 33.79264,40.47792 22.01808,40.47792 C18.40384,40.47792 15.03936,39.42176 12.208,37.60512 C12.70864,37.66448 13.21824,37.69472 13.73456,37.69472 C16.73392,37.69472 19.49248,36.67104 21.6832,34.9552 C18.8832,34.90368 16.51888,33.05344 15.70464,30.50992 C16.0944,30.58384 16.49648,30.62528 16.90752,30.62528 C17.49104,30.62528 18.05776,30.54912 18.59424,30.4024 C15.66656,29.81552 13.46128,27.22944 13.46128,24.12704 C13.46128,24.10016 13.46128,24.07216 13.4624,24.0464 C14.3248,24.52464 15.31152,24.8136 16.35984,24.84608 C14.644,23.70032 13.51392,21.74032 13.51392,19.52048 C13.51392,18.34672 13.82864,17.24688 14.37968,16.3016 C17.53472,20.17456 22.25216,22.72144 27.56992,22.99024 C27.46016,22.52096 27.40528,22.03376 27.40528,21.53088 C27.40528,17.99728 30.27024,15.1312 33.80384,15.1312 C35.64512,15.1312 37.30608,15.90848 38.47536,17.15168 C39.93472,16.86496 41.30112,16.33408 42.54096,15.59824 C42.05936,17.09344 41.048,18.34672 39.72304,19.13968 C41.01888,18.98512 42.25536,18.6424 43.39888,18.1328 C42.54544,19.41408 41.46016,20.54192 40.20912,21.44128 Z"></path>'+
                '</g></g></g></g></g></g></g></g></g></svg></a>' +
                '<a href="#" class="blog__item-share-link s_pinterest" rel="nofollow">' +
                '<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
                '<g transform="translate(-1172.000000, -10454.000000)" fill-rule="nonzero"><g transform="translate(-138.000000, 8602.000000)">'+
                '<g transform="translate(265.000000, 1668.000000)"><g transform="translate(0.000000, 11.000000)"><g transform="translate(0.000000, 127.000000)">'+
                '<g transform="translate(1015.000000, 46.000000)"><g transform="translate(30.000000, 0.000000)"><g>'+
                '<path d="M28,0 C12.5363137,0 0,12.5363137 0,28 C0,43.4635948 12.5363137,56 28,56 C43.4635948,56 56,43.4635948 56,28 C56,12.5363137 43.4635948,0 28,0 Z M30.576,36.4788758 C28.5065621,36.4788758 26.559281,35.336 25.8898431,34.0377516 C25.8898431,34.0377516 24.7774379,38.5483137 24.540719,39.4188758 C24.1435948,40.8901569 23.3774379,42.3589673 22.6671895,43.5222484 C21.6541569,44.8458431 20.4857516,43.8633725 20.3457516,42.656719 C20.3,41.312719 20.3483137,39.7218431 20.6817516,38.2735294 C21.0508758,36.6852157 23.1483137,27.6055294 23.1483137,27.6055294 C23.1483137,27.6055294 22.5348758,26.3556863 22.5348758,24.5076863 C22.5348758,21.6058431 24.1818431,19.4396863 26.2334379,19.4396863 C27.9770327,19.4396863 28.8195948,20.7786536 28.8195948,22.3796863 C28.8195948,24.1691242 27.7021569,26.8469673 27.1268758,29.3262484 C26.6457516,31.4033725 28.1475948,33.0960915 30.1534379,33.0960915 C33.7857516,33.0960915 36.2345621,28.3309673 36.2345621,22.6876863 C36.2345621,18.3960915 33.4039085,15.1862484 28.2545621,15.1862484 C22.4381569,15.1862484 18.8134379,19.615281 18.8134379,24.5611242 C18.8134379,26.2665621 19.304719,27.4705621 20.0785621,28.3996863 C20.4324052,28.8273725 20.483281,29.0004052 20.3534379,29.4917778 C20.2618431,29.8532157 20.0505621,30.7186536 19.964,31.0622484 C19.836719,31.5586536 19.4421569,31.7343399 19.0043137,31.5510588 C16.324,30.4335294 15.076719,27.4375294 15.076719,24.0724967 C15.076719,18.5106536 19.671281,11.8415294 28.7814379,11.8415294 C36.1021569,11.8415294 40.920719,17.2506536 40.920719,23.0568105 C40.9231895,30.7414379 36.7410327,36.4788758 30.576,36.4788758 Z"></path>'+
                '</g></g></g></g></g></g></g></g></g></svg></a>' +
                '</div>\n' +
                '<div class="blog__item-footer">' +
                '<time datetime="'+ blogItemDate +'">'+ _monthNames[ dateArr[1] - 1 ] +' '+ dateArr[2] +', '+ dateArr[0] +'</time>' +
                '<a href="'+ blogItemLink +'" class="btn btn_color-1 btn_type-general"><span>Read More</span></a>' +
                '</div></div></article>';

            return frameItem;

        },
        _initSocialShare = function ( obj ) {

            var socialWrap = obj.find( '.blog__item-share' ),
                socialData = JSON.parse( socialWrap.attr( 'data-social' ) ),
                socialItem = socialWrap.find( 'a' );

            $.each( socialItem, function() {

                $(this).ShareLink( {
                    title: unescape( socialData[ 'title' ] ),
                    text: unescape( socialData[ 'text' ] ),
                    image: socialData[ 'image' ],
                    url: socialData[ 'url' ],
                    width: 640,
                    height: 480
                } );

            } );

        },
        _loadData = function () {

            if( _canSendRequest && _currentPage <= _maxPage ){
                _sendRequest();
            }

        },
        _sendRequest = function() {

            _canSendRequest = false;

            _request.abort();
            _blogWrap.addClass( 'is-loading' ).removeClass( 'is-empty' );

            _request = $.ajax( {
                url: _url,
                data: {
                    action: 'get_posts_by_category',
                    page: _currentPage,
                    taxId: _currentId
                },
                dataType: 'json',
                timeout: 20000,
                type: 'POST',
                success: function ( data ) {
                    _setList( data );
                },
                error: function ( XMLHttpRequest ) {
                    if ( XMLHttpRequest.statusText != "abort" ) {
                        console.error( 'err' );
                    }
                }
            } );

        },
        _setList = function( data ) {

            var blogData = data.blog,
                blogItemTotal = blogData.length;

            if ( blogItemTotal === 0 ){
                _canSendRequest = false;
                _blogWrap.addClass( 'is-empty' ).removeClass( 'is-loading' );
                return false;
            }

            _maxPage = data.maxPages;

            $.each( blogData, function( index ) {

                var blogFrame = _setBlogItem( this );

                _blogList.append( blogFrame );

                if ( index === blogItemTotal - 1 ){
                    _blogWrap.removeClass( 'is-loading' );
                    _canSendRequest = true;

                    _blogWrap.css( 'height', _blogList.outerHeight() );

                    var newItem = _blogList.find( '.is-new' );

                    newItem.each( function ( i ) {

                        var curItem = $( this );

                        _initSocialShare( curItem );
                        _showNewItems( curItem, i );

                    } );

                    var image = newItem.find( 'img' );

                    image.on( 'load', function () {
                        _blogWrap.css( 'height', _blogList.outerHeight() );
                    } );

                }

            } );

            _currentPage = _currentPage + 1;

        },
        _showNewItems = function ( item, index ) {

            var curItem = item;

            setTimeout( function() {
                curItem.removeClass( 'is-new' );
            }, 100 * index );

        },
        _construct = function() {
            _categoryItem.filter( '[data-id="'+ _currentId +'"]' ).addClass( 'is-active' );
            _onEvents();
            _loadData();
        };

    _construct()
};

var BookGallery = function ( obj ) {

    var _obj = obj,
        _item = _obj.find( '.book__gallery-item' );

    var _onEvents = function() {

            _item.on( 'click', function () {
                SwiperPopup( $( this ).parents( '.book__gallery' ), $( this ).index() );
                return false;
            } );

        },
        _construct = function() {
            _onEvents();
        };

    _construct()
};

var CartList = function ( obj ) {

    var _obj = obj,
        _table = _obj.find( '.cart-list__table' ),
        _footer = _obj.find( '.cart-list__btn-wrap' ),
        _item = _obj.find( '.cart-list__row' ),
        _deleteBtn = _item.find( '.cart-list__delete' ),
        _totalWrap = _obj.find( '.cart-list__total strong' ),
        _couponWrap = _obj.find( '.coupons' ),
        _couponForm = _couponWrap.find( '.coupons__form' ),
        _couponMessage = _couponWrap.find( '.coupons__message' ),
        _couponInput = _obj.find( 'input' ),
        _validation = new FormValidator( _obj ),
        _url = $( 'body' ).data( 'action' ),
        _request = new XMLHttpRequest();

    var _onEvents = function() {

            _deleteBtn.on( 'click', function () {
                _ajaxRequest( $( this ) );
                return false;
            } );

            _couponForm.on( 'submit', function (e) {
                e.preventDefault();

                _obj.addClass( 'is-loading' );

                if ( _validation.valid === true ) {
                    _ajaxCouponRequest();
                } else {
                    _obj.removeClass( 'is-loading' );
                }

            } );

        },
        _checkCounter = function () {

            _obj.removeClass( 'is-loading' );

            _obj.css( 'height', _obj.outerHeight() );

            _obj.addClass( 'is-empty' ).animate( { height: 0 }, 300 );

            _table.on( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                _table.remove();
                _footer.remove();
                _obj.removeAttr( 'style' )
            } );

        },
        _removeItem = function( obj ) {

            _obj.removeClass( 'is-loading' );

            var curRow = obj,
                timer;

            curRow.css( 'height', curRow.outerHeight() );

            curRow.animate( {
                    height: 0
                }, 300,
                function() {

                    timer = setTimeout( function () {
                        curRow.remove();
                        clearTimeout( timer );
                    }, 300 );

                } );

        },
        _ajaxRequest = function ( obj ) {

            _obj.addClass( 'is-loading' );

            _request.abort();

            var curRow = obj.parents( '.cart-list__row' ),
                _data = curRow.data( 'cart' );

            _request = $.ajax( {
                url: _url,
                data: {
                    action: 'remove_cart_item',
                    key: _data.key,
                    id: _data.id,
                    value: _data.value
                },
                dataType: 'json',
                type: 'POST',
                success: function ( data ) {

                    if ( data ){

                        if ( data.cartCountProducts == 0 ) {
                            _checkCounter();
                        } else {
                            _removeItem( curRow );
                        }

                        _setTotalValue( data );

                    } else {
                        _request.abort();
                    }

                },
                error: function ( XMLHttpRequest ) {
                    if ( XMLHttpRequest.statusText != "abort" ) {
                        console.error( 'err' );
                    }
                }
            } );

        },
        _ajaxCouponRequest = function () {

            _request.abort();

            _request = $.ajax({
                url: _url,
                data: {
                    action: 'apply_coupon_to_order',
                    coupon_name: _couponInput.val()
                },
                dataType: 'json',
                type: 'GET',
                success: function ( data ) {
                    _checkCoupon( data );
                },
                error: function ( XMLHttpRequest ) {
                    if ( XMLHttpRequest.statusText != "abort" ) {
                        console.error( 'err' );
                    }
                }
            });

        },
        _checkCoupon = function( data ){

            if ( data.status >= 1 ) {

                _couponMessage.html( data.message +'. Discount:'+ data.discount );
                _couponForm.remove();

                _setTotalValue( data );


            } else {

                var timer;

                _couponMessage.html( 'Wrong promo code. Try again' ).addClass( 'is-show' );

                timer = setTimeout( function () {
                    _couponMessage.removeClass( 'is-show' );
                    clearTimeout( timer );
                }, 2500 );

            }

            _obj.removeClass( 'is-loading' );

        },
        _setTotalValue = function( data ) {

            _totalWrap.html( $( data.total ).text()  );
            BasketUpdate( data.total );

        },
        _construct = function() {
            _onEvents();
        };

    _construct()
};

var ChangeBookLanguage = function ( obj ) {

    var _obj = obj,
        _bookPictureWrap = _obj.find( '.book__picture' ),
        _bookPicture = _bookPictureWrap.find( 'img' ),
        _languageWrap = _obj.find( '.book__language' ),
        _languageItem = _languageWrap.find( 'input' ),
        _addCartBtn = _obj.find( '.ajax-add-to-cart' );

    var _onEvents = function() {

            _languageItem.on( 'click', function () {
                _changeLanguage( $( this ) );
            } );

        },
        _changeLanguage = function( obj ) {

            var curItem = obj,
                curId = curItem.val();

            _bookPicture.addClass( 'hide' );
            _bookPicture.filter( '[data-id='+ curId +']' ).removeClass( 'hide' );

            _addCartBtn.attr( 'data-id', curId )

        },
        _construct = function() {
            _onEvents();
            _languageItem.eq(0).trigger( 'click' );
        };

    _construct()
};

var InitJoinUsSlider = function (obj) {

    //private properties
    var _obj = obj,
        _swiperSliser = _obj.find( '.swiper-container' ),
        _swiper;

    //private methods
    var _initSlider = function () {

            _swiper = new Swiper( _swiperSliser, {
                effect: 'slide',
                speed: 500,
                loop: true,
                threshold: 10,
                spaceBetween: 20,
                slidesPerView: 'auto',
                centeredSlides: true
            } );


        },
        _construct = function() {
            _initSlider();
        };

    //public properties

    //public methods

    _construct();

};

var InitScroll = function ( obj ) {

    var _obj = obj,
        _categoriesFrame = _obj.find( '.categories__wrap' ),
        _ps = null,
        _scrollWrap,
        _window = $( window );

    var _initScroll = function() {

            if ( _ps !== null ) {
                _ps.destroy();
                _ps = null;
            }

            _scrollWrap = document.querySelector( '.categories__wrap' );

            if ( _categoriesFrame.outerWidth() > _window.outerWidth() ) {

                _ps = new PerfectScrollbar( _scrollWrap, {
                    suppressScrollY: true
                } );

                _scrollToActive();

            }

        },
        _onEvent = function () {

            _window.on( 'resize', function () {
                _initScroll();
            } );

        },
        _scrollToActive = function () {

            var activeItem = _categoriesFrame.find( '.is-active' );

            if ( activeItem.length > 0 ){

                var windowWidth = _window.outerWidth(),
                    wrapWidth = activeItem.offset().left;

                _scrollWrap.scrollLeft = wrapWidth/2 - windowWidth/2 + wrapWidth;

            }

        },
        _construct = function() {
            _onEvent();
            _initScroll();
        };

    _construct()
};

var InitSlider = function (obj) {

    //private properties
    var _obj = obj,
        _swiperSliser = _obj.find( '.swiper-container' ),
        _swiperSlide = _obj.find( '.swiper-slide' ),
        _swiperPagination = _obj.find( '.pagination' ),
        _window = $( window ),
        _swiper,
        _isMobileSlider = false;

    //private methods
    var _onEvent = function () {

            _window.on( 'resize', function () {
                _updateSlider();
            } );

        },
        _initSlider = function () {

            if ( _swiperSlide.length === 1 ){
                return false
            }

            if ( _window.outerWidth() >= 768 ) {

                _isMobileSlider = false;

                _swiper = new Swiper( _swiperSliser, {
                    effect: 'fade',
                    speed: 300,
                    loop: true,
                    slidesPerView: 1,
                    threshold: 10,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: true
                    },
                    pagination: {
                        el: _swiperPagination,
                        clickable: true
                    }
                } );

            } else if ( _window.outerWidth() < 768 ) {

                _isMobileSlider = true;

                _swiper = new Swiper( _swiperSliser, {
                    effect: 'fade',
                    speed: 300,
                    loop: true,
                    slidesPerView: 1,
                    threshold: 10,
                    autoHeight: true,
                    pagination: {
                        el: _swiperPagination,
                        clickable: true
                    }
                } );

            }

        },
        _updateSlider = function() {

            if ( _window.outerWidth() >= 768 && _isMobileSlider ) {

                _swiper.destroy( true, true );
                _initSlider();

            } else if ( _window.outerWidth() < 768 && !_isMobileSlider ) {

                _swiper.destroy( true, true );
                _initSlider();

            } else {

                setTimeout( function () {
                    _swiper.update( );
                } );

            }

        },
        _construct = function() {
            _onEvent();
            _initSlider();
        };

    //public properties

    //public methods

    _construct();

};

var InitSocialShare = function ( obj ) {

    //private properties
    var _socialWrap = obj,
        _socialData = _socialWrap.data( 'social' ),
        _socialItem = _socialWrap.find( '.social_item' );

    //private methods
    var _initShare = function () {

            _socialItem.each( function () {

                $( this ).ShareLink( {
                    title: unescape( _socialData[ 'title' ] ),
                    text: unescape(  _socialData[ 'text' ] ),
                    image: _socialData[ 'image' ],
                    url: _socialData[ 'url' ],
                    width: 640,
                    height: 480
                } );

            } );

        },
        _construct = function() {
            _initShare();
        };

    //public properties

    //public methods

    _construct();

};

var InitTableScroll = function ( obj ) {

    var _obj = obj,
        _tableFrame = _obj.find( '.orders__wrap' ),
        _ps = null,
        _window = $( window );

    var _initScroll = function() {

            if ( _tableFrame.outerWidth() >= _window.outerWidth() ) {

                var scrollWrap = document.querySelector( '.orders' );

                _ps = new PerfectScrollbar( scrollWrap, {
                    suppressScrollY: true
                } );

            }

        },
        _construct = function() {
            _initScroll();
        };

    _construct()
};

var FixHeader = function( obj ) {

    //private properties
    var _header = obj,
        _mobileFixedSection = _header.find( '.site__header-fixed' ),
        _desktopFixedSection = _header.find( '.site__header-wrap' ),
        _fixedWrap = null, _startPoint = null, _curDeviseSize = 0,
        _window = $( window );

    //private methods
    var _onEvent = function() {

            _window.on( {
                'resize': function () {
                    _checkFixedWrap();
                },
                'scroll': function () {
                    _checkPosition();
                }
            } );

        },
        _checkPosition = function () {
            _window.scrollTop() > _startPoint ? _fixHeader() : _unfixHeader()
        },
        _fixHeader = function () {
            _fixedWrap.addClass( 'is-fixed' )
        },
        _unfixHeader = function () {
            _fixedWrap.removeClass( 'is-fixed' )
        },
        _checkFixedWrap = function() {

            if ( _curDeviseSize !== 0 && ( ( _window.outerWidth() < 1200 && _curDeviseSize < 1200 ) ||
                ( _window.outerWidth() >= 1200 && _curDeviseSize >= 1200 ) ) ){
                return false;
            } else if ( _fixedWrap !== null ){
                _fixedWrap.removeClass( 'is-fixed' );
            }

            if ( _window.outerWidth() >= 1200  ) {
                _fixedWrap = _desktopFixedSection;
                _startPoint = 253;
            } else {
                _fixedWrap = _mobileFixedSection;
                _startPoint = 0;
            }

            _curDeviseSize = _window.outerWidth();

            _checkPosition();

        },
        _construct = function() {
            _onEvent();
            _checkFixedWrap();
        };

    //public properties

    //public methods

    _construct();
};

var FreeRecipesSection = function( obj ) {

    //private properties
    var _obj = obj,
        _options = _obj.data( 'options' ) || {"is_save_category":"false","is_save_page":"false","is_show_title":"false"},
        _optionsSaveCategory = ( _options['is_save_category'] === 'true' ) || false,
        _optionsShowFilterAsDefault = ( _options['show_as_default'] === 'true' ) || false,
        _optionsSavePage = ( _options['is_save_page'] === 'true' ) || false,
        _optionsShoveTitle = ( _options['is_show_title'] === 'true' ) || false,
        _categoriesFrame = _obj.find( '.free-recipes__categories-wrap' ),
        _categoriesItem = _categoriesFrame.find( '.free-recipes__categories-item' ),
        _catalogFrame = _obj.find( '.free-recipes__catalog' ),
        _catalogWrap = _catalogFrame.find( '.free-recipes__catalog-wrap' ),
        _pagination = _obj.find( '.free-recipes__pagination' ),
        _window = $( window ),
        _url = $( 'body' ).data( 'action' ),
        _ifFirstPage = true,
        _scrollWrap,
        _request = new XMLHttpRequest(),
        _ps = null, _recipesStorage = {},
        _isInitialFilterSetting = true;
        
    //private methods
    var _onEvent = function() {

            _window.on( 'resize', function () {
                _updateStyles();
                _initMobileCatalogScroll();
            } );

            _categoriesItem.on( 'click', function () {
                _changeCategory( $( this ), 1 );
                return false;
            } );

        },
        _activeAtFirstTime = function () {
            
            if ( _optionsSaveCategory || _optionsSavePage ) {
                
                if (!_optionsShowFilterAsDefault) {

                    var storage = JSON.parse( localStorage.getItem( 'FreeRecipes' ) );
               
                }

            }

            if ( storage == null || _optionsShowFilterAsDefault ){
            
                _categoriesItem.eq(0).trigger( 'click' );
            } else {
                var activeCategory = storage[ 'categoriesID' ] || _categoriesItem.eq(0).data( 'id' ),
                    activePage = storage[ 'page' ] || 1;

                _changeCategory( _categoriesItem.filter( '[data-id='+ activeCategory +']' ), activePage );
            }

        },
        _ajaxRequest = function ( id, page ) {

            _request.abort();

            _request = $.ajax( {
                url: _url,
                data: {
                    action: 'get_recipes_by_taxonomy',
                    page: page,
                    taxId: id
                },
                dataType: 'json',
                type: 'POST',
                success: function ( data ) {
                    _setGallery( data );
                },
                error: function ( XMLHttpRequest ) {
                    if ( XMLHttpRequest.statusText != "abort" ) {
                        console.error( 'err' );
                    }
                }
            } );

        },
        _initMobileCatalogScroll = function () {

            _scrollWrap = document.querySelector( '.free-recipes__categories-wrap' );

            if ( _ps === null && _categoriesFrame.outerWidth() > _window.outerWidth() ) {

                _ps = new PerfectScrollbar( _scrollWrap, {
                    suppressScrollY: true
                } );

                _scrollToActive();

            } else if ( _ps !== null && _categoriesFrame.outerWidth() <= _window.outerWidth() ) {

                _ps.destroy();
                _ps = null;

                _initMobileCatalogScroll();

            } else if ( _ps !== null ){

                _scrollToActive();

            }

        },
        _createItemFrame = function ( data ) {

            var recipesItem = data,
                recipesItemLink = recipesItem.link,
                recipesItemImage = recipesItem.image,
                recipesItemTitle = recipesItem.title,
                recipesFrameTitle = '',
                frameItem;

            if ( _optionsShoveTitle ) {
                recipesFrameTitle = '<div>'+ recipesItemTitle +'</div>';
            }

            frameItem = '<a href="'+ recipesItemLink +'" class="free-recipes__item">' +
                '<div class="free-recipes__picture">' +
                '<img src="'+ recipesItemImage +'" alt="'+ recipesItemTitle +'" />' +
                '</div>' + recipesFrameTitle + '</a>';

            return frameItem;

        },
        _changeCategory = function ( btn, page ) {
            
            var curBtn = btn,
                curPage = page;

            _categoriesItem.removeClass( 'is-active' );
            curBtn.addClass( 'is-active' );

            if ( _optionsSaveCategory ) {
                _recipesStorage['categoriesID'] = curBtn.data('id');
                _recipesStorage['page'] = curPage;

                if (!_optionsShowFilterAsDefault && !_isInitialFilterSetting) {
                    localStorage.setItem('FreeRecipes', JSON.stringify(_recipesStorage));
                    _isInitialFilterSetting = false
                }
   
            }

            if (_isInitialFilterSetting) {
                _isInitialFilterSetting = false
            }

            if ( !_optionsSavePage ){ curPage = 1 }

            _preparationFrame();
            _ajaxRequest( curBtn.data( 'id' ), curPage );

        },
        _changePage = function ( btn ) {

            var curBtn = btn,
                curCategories = _categoriesItem.filter( '.is-active' ),
                pageBtn = _pagination.find( 'span' );

            pageBtn.removeClass( 'is-active' );
            curBtn.addClass( 'is-active' );

            _catalogFrame.addClass( 'load load-page' );
            _catalogWrap.empty();

            if ( _optionsSaveCategory ){
                _recipesStorage[ 'categoriesID' ] = curCategories.data( 'id' );
                _recipesStorage[ 'page' ] = curBtn.attr( 'data-page' );

                localStorage.setItem( 'FreeRecipes', JSON.stringify( _recipesStorage ) );
            }

            _ajaxRequest( curCategories.data( 'id' ), curBtn.attr( 'data-page' ) );

        },
        _preparationFrame = function () {

            _catalogFrame.addClass( 'load' );

            _catalogWrap.empty();
            _pagination.empty();

            _ifFirstPage = true;

        },
        _setGallery = function ( data ) {

            if( data.recipes == undefined ){
                return false;
            }

            var recipes = data.recipes,
                totalPages = data.maxPages,
                recipesTotal = recipes.length,
                columns = 2,
                numberInColl = Math.round( recipesTotal / columns ),
                extraNumber = Math.abs( recipesTotal - numberInColl * columns ),
                columnFrame = $( '<li/>' ),
                curItem = 0, curColumn = 1;

            $.each( recipes, function( index ) {

                curItem = Math.floor( ( index + 1 ) / curColumn );

                var recipesItem = _createItemFrame( this );

                columnFrame.append( recipesItem );

                if ( curItem >= numberInColl ){
                    _catalogWrap.append( columnFrame );
                    columnFrame = $( '<li/>' );
                    curColumn ++;
                }

                if ( index === recipesTotal - 1 ){

                    if ( extraNumber > 0 ) {
                        _catalogWrap.append( columnFrame );
                    }

                    _setStyles();

                }

            } );

            if ( totalPages > 1 && _ifFirstPage ){
                _setPagination( totalPages );
                _ifFirstPage = false;
            }

        },
        _scrollToActive = function () {

            var activeItem = _categoriesFrame.find( '.is-active' );

            if ( activeItem.length > 0 ){

                var windowWidth = _window.outerWidth(),
                    wrapWidth = activeItem.offset().left;

                _scrollWrap.scrollLeft = wrapWidth/2 - windowWidth/2 + wrapWidth;

            }

        },
        _setStyles = function () {

            var image = _catalogWrap.find( 'img' ),
                totalImages = image.length,
                curItem = 1;

            image.on ( 'load', function () {

                var curPicture = $( this ),
                    curPictureFrame = curPicture.parent( '.free-recipes__picture' ),
                    frameHeight = curPicture.outerHeight(),
                    pictureHeight = curPictureFrame.outerHeight();

                if ( pictureHeight > frameHeight ) {
                    curPicture.css( {
                        'width': 'auto',
                        'height': '100%'
                    } )
                } else {
                    curPicture.removeAttr( 'style' );
                }

                if ( curItem === totalImages ) {
                    _catalogFrame.css( 'height', _catalogWrap.outerHeight() );
                    _catalogFrame.removeClass( 'load load-page' );
                }

                curItem++

            } );

        },
        _updateStyles = function () {

            var image = _catalogWrap.find( 'img' ),
                totalImages = image.length;

            image.each ( function ( index ) {

                var curPicture = $( this );

                curPicture.removeAttr( 'style' );

                var curPictureFrame = curPicture.parent( '.free-recipes__picture' ),
                    frameHeight = curPicture.outerHeight(),
                    pictureHeight = curPictureFrame.outerHeight();

                if ( pictureHeight > frameHeight ) {

                    curPicture.css( {
                        'width': 'auto',
                        'height': '100%'
                    } )
                }

                if ( index + 1 === totalImages ) {
                    _catalogFrame.css( 'height', _catalogWrap.outerHeight() );
                }

            } );

        },
        _setPagination = function ( pages ) {

            var totalPages = pages;

            for( var i = 1; i <= totalPages; i++ ){
                _pagination.append( '<span data-page="'+ i +'"></span>' )
            }

            var pageBtn = _pagination.find( 'span' );

            pageBtn.on( 'click', function () {
                _changePage( $( this ) )
            } );
            
            var activePage = _recipesStorage[ 'page' ]

            if (!activePage) {
                activePage = 1
            }

            pageBtn.filter( '[data-page='+ activePage +']' ).addClass( 'is-active' );

        },
        _construct = function() {
            _onEvent();
            _initMobileCatalogScroll();
            _activeAtFirstTime();
        };

    //public properties

    //public methods

    _construct();
};

var MobileMenu = function( obj ) {

    //private properties
    var _obj = obj,
        _menuWrap = _obj.find( 'ul' ),
        _mobileBtn = $( '.hamburger' ),
        _html = $( 'html' ),
        _body = $( 'body' ),
        _site = _body.find( '.site' ),
        _window = $( window ),
        _position = 0;

    //private methods
    var _onEvent = function() {

            _site.on( 'click', function ( e ) {

                if ( _obj.hasClass( 'is-show' ) && $( e.target ).closest( _menuWrap ).length === 0 ){
                    _hideMobileMenu();
                }

            } );

            _mobileBtn.on( 'click', function () {

                if ( $( this ).hasClass( 'is-active' ) ){
                    _hideMobileMenu();
                } else {
                    _showMobileMenu();
                }

                return false;
            } );

        },
        _hideMobileMenu = function () {

            _mobileBtn.removeClass( 'is-active' );

            _obj.removeClass( 'is-show' );

            _html.removeAttr( 'style' );
            _body.removeAttr( 'style' );
            _site.removeAttr( 'style' );

            _window.scrollTop( _position );

        },
        _showMobileMenu = function () {

            _mobileBtn.addClass( 'is-active' );

            _obj.addClass( 'is-show' );

            _position = _window.scrollTop();

            _html.css( 'overflow-y', 'hidden' );
            _body.css( 'overflow-y', 'hidden' );

            _site.css( {
                'position': 'relative',
                'top': _position * -1
            } );

        },
        _construct = function() {
            _onEvent();
        };

    //public properties

    //public methods

    _construct();
};

var OfferTimer = function ( obj ) {

    //private properties
    var _obj = obj,
        _millisecondsInSecond = 1000,
        _millisecondsInMinute = _millisecondsInSecond * 60,
        _millisecondsInHour = _millisecondsInMinute * 60,
        _millisecondsInDay = _millisecondsInHour * 24,
        _daysFrame = _obj.find( '.flash-sales__timer-days' ),
        _hoursFrame = _obj.find( '.flash-sales__timer-hours' ),
        _minutesFrame = _obj.find( '.flash-sales__timer-minutes' ),
        _secondsFrame = _obj.find( '.flash-sales__timer-seconds' ),
        _days = 0, _hours = 0, _minutes = 0,
        _stopped = false,

        _lastMoment = _obj.data( 'time-out' );

    //private methods
    var _onEvent = function () {

        },
        _setTimer = function () {

            var difference = new Date( _lastMoment ) - new Date();

            if( difference > 0 ){

                var days, hours, minutes, seconds;

                days =  Math.floor( difference / _millisecondsInDay );
                hours =  Math.floor( ( difference - ( days * _millisecondsInDay ) ) / _millisecondsInHour );
                minutes = Math.floor( ( difference - ( ( days * _millisecondsInDay ) + ( hours * _millisecondsInHour ) ) ) / _millisecondsInMinute );
                seconds = Math.floor( ( difference - ( ( days * _millisecondsInDay ) + ( hours * _millisecondsInHour ) + ( minutes * _millisecondsInMinute ) ) ) / _millisecondsInSecond );

                _setClockFace( seconds, _secondsFrame );

                if ( _minutes !== minutes ){
                    _minutes = minutes;
                    _setClockFace( minutes, _minutesFrame );

                    if ( _hours !== hours ){
                        _hours = hours;
                        _setClockFace( hours, _hoursFrame );

                        if ( _days !== days ){
                            _days = days;
                            _setClockFace( days, _daysFrame );
                        }

                    }

                }

                if ( _days == 0 ) {
                    _daysFrame.parents( '.flash-sales__clock-face' ).remove();
                }

            } else if( difference <= 0 ) {
                _stopped = true;
                _obj.addClass( 'is-hide' ).remove()
            }

        },
        _loop = function(){

            _setTimer();

            if( !_stopped ) {
                requestAnimationFrame( _loop );
            }

        },
        _setClockFace = function ( val, obj ) {

            var cutIntTime = val,
                cutStrTime = ''+ cutIntTime,
                time = [];

            if ( cutIntTime < 10 ){
                cutIntTime = '0' + val;
                time = cutIntTime.split('');
            } else {
                time = cutStrTime.split('');
            }

            obj.html( '<span>'+ time[0] +'</span><span>'+ time[1] +'</span>' )

        },
        _construct = function() {
            _onEvent();
            _loop();
        };

    //public properties

    //public methods

    _construct();

};

var OpenItems = function( obj ) {

    //private properties
    var _obj = obj,
        _item = _obj.find( '.faq-wrap__item' ),
        _tabs = $( '.tabs' ),
        _site = $( '.site' );

    //private methods
    var _onEvent = function () {

            _site.on( 'click', function ( e ) {

                if ( $( e.target ).closest( _item ).length == 0 ){
                    _item.removeClass( 'is-open' );
                }

            } );

            _item.on( {
                'click': function () {
                    _openItem( $( this ) );
                },
                'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend': function() {

                    if ( _tabs.length > 0 ){
                        _tabs[0].obj.setHeight();
                    }

                }
            } );

        },
        _openItem = function ( obj ) {

            var curItem = obj;

            if ( curItem.hasClass( 'is-open' ) ){
                _item.removeClass( 'is-open' );
            } else {
                _item.removeClass( 'is-open' );
                curItem.addClass( 'is-open' );
            }


        },
        _construct = function() {
            _onEvent();
        };

    //public properties

    //public methods

    _construct();

};

var Preloader = function (obj) {

    //private properties
    var _preloader = obj;

    //private methods
    var _showSite = function() {

        _preloader.addClass( 'preload_loaded' );

        _preloader.on( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            _preloader.remove();
        } );

    };

    //public properties

    //public methods

    _showSite();

};

var ReviewsItems = function( obj ){

    //private properties
    var _obj = obj,
        _swiperSliser = _obj.find( '.swiper-container' ),
        _item = _obj.find( 'li' ),
        _swiperPagination = $( '<div class="reviews__slider-pagination pagination"></div>' ),
        _count = 5,
        _swiper;

    //private methods
    var _onEvents = function(){

        },
        _checkQuantity = function(){

            if( _item.length <= _count ){ return false }

            var maxCount = 0;

            $.each( _item, function( index ) {

                maxCount = Math.ceil( ( index + 1 ) / _count );

                $( this ).attr( 'data-count', maxCount );

            } );

            for( var n = 0; n <= maxCount; n++ ){
                _item.filter( '[data-count="'+ n +'"]' ).wrapAll( '<ul class="swiper-slide"></ul>' )
            }

            _swiperSliser.append( _swiperPagination );
            _swiperPagination = _swiperSliser.find( '.reviews__slider-pagination' );

            _swiper = new Swiper( _swiperSliser, {
                speed: 300,
                loop: false,
                slidesPerView: 1,
                threshold: 10,
                spaceBetween: 80,
                autoHeight: true,
                pagination: {
                    el: _swiperPagination,
                    clickable: true
                }
            } );

        },
        _construct = function(){
            _onEvents();
            _checkQuantity();
        };

    //public properties

    //public methods

    _construct();

};

var SearchForm = function( obj ) {

    //private properties
    var _obj = obj,
        _searchForm = _obj.find( '.search__form' ),
        _searchHook = _searchForm.data( 'action' ),
        _searchInput = _searchForm.find( 'input' ),
        _searchPopup = _obj.find( '.search__popup' ),
        _searchPopupScrollWrap = _searchPopup.find( '.search__popup-scroll-wrap' ),
        _resultWrap = _searchPopup.find( '.search__result' ),
        _url = $( 'body' ).data( 'action' ),
        _site = $( '.site' ),
        _ps = null,
        _timer = null,
        _witchLetterStat = 2,
        _request = new XMLHttpRequest();

    //private methods
    var _onEvent = function () {

            _site.on( 'click', function ( e ) {

                if ( _searchPopup.hasClass( 'is-show' ) && $( e.target ).closest( _obj ).length == 0 ){
                    _hidePopup();
                }

            } );

            _searchInput.on ( 'keyup', function( e ) {

                var symbolNumber = _searchInput.val().length;

                switch ( e.keyCode ) {
                    case 27:
                        _hidePopup();
                        break;
                    case 13, 27, 37, 38, 39, 40:
                        (e).preventDefault();
                        break;
                    default:
                        if( symbolNumber > _witchLetterStat ){

                            _request.abort();
                            clearTimeout( _timer );

                            _timer = setTimeout( function () {
                                _searchForm.hasClass( 'is-show' ) ? _ajaxRequest() : _showPopup();
                            }, 500 );

                        } else if ( symbolNumber <= _witchLetterStat ) {

                            _request.abort();
                            clearTimeout( _timer );
                            _hidePopup();

                        }
                }

            } );

        },
        _ajaxRequest = function () {

            _searchPopup.addClass( 'is-loading' );

            _request.abort();

            _request = $.ajax( {
                url: _url,
                data: {
                    action: _searchHook,
                    search_value: _searchInput.val()
                },
                dataType: 'json',
                type: 'POST',
                success: function ( data ) {
                    _loadData( data );
                },
                error: function ( XMLHttpRequest ) {
                    if ( XMLHttpRequest.statusText != "abort" ) {
                        console.error( 'err' );
                    }
                }
            } );

        },
        _loadData = function ( data ) {

            var info;

            if ( _searchHook === 'get_posts_autocomplete' ){
                info = data.blog;
            } else if ( _searchHook === 'get_recipes_autocomplete' ) {
                info = data.recipes;
            }

            _resultWrap.empty();

            if ( !info ){
                _searchPopup.addClass( 'is-empty' );
                _searchPopup.removeClass( 'is-loading' );
                return false;
            }

            var recipesTotal = info.length;

            if ( recipesTotal !== 0 ){

                _searchPopup.removeClass( 'is-empty' );

                $.each( info, function( index ) {

                    var recipesItem = _createItemFrame( this );

                    _resultWrap.append( recipesItem );

                    if ( index === recipesTotal - 1 ){

                        _searchPopup.removeClass( 'is-loading' );

                        var image = _resultWrap.find( 'img' );

                        image.on( 'load', function () {
                            _setWrapHeight();
                        } );

                    }

                } );

            } else {
                _searchPopup.addClass( 'is-empty' );
                _searchPopup.removeClass( 'is-loading' );
            }

        },
        _createItemFrame = function ( data ) {

            var recipesItem = data,
                recipesItemLink = recipesItem.link,
                recipesItemImage = recipesItem.image,
                recipesItemTitle = recipesItem.title,
                recipesItemCookingTime = recipesItem.cookingTime,
                frameItem = null;

            if ( _searchHook === 'get_posts_autocomplete' ){

                frameItem = '<a href="'+ recipesItemLink +'" class="search__result-item">' +
                    '<div class="search__result-picture">' +
                    '<img src="'+ recipesItemImage +'" alt="'+ recipesItemTitle +'" />' +
                    '</div>' +
                    ' <div class="search__result-text">' +
                    '<p>'+ recipesItemTitle +'</p>' +
                    '</div></a>';

            } else if ( _searchHook === 'get_recipes_autocomplete' ) {

                frameItem = '<a href="'+ recipesItemLink +'" class="search__result-item">' +
                    '<div class="search__result-picture">' +
                    '<img src="'+ recipesItemImage +'" alt="'+ recipesItemTitle +'" />' +
                    '</div>' +
                    ' <div class="search__result-text">' +
                    '<p>'+ recipesItemTitle +'</p>' +
                    '<p>'+ recipesItemCookingTime +'</p>' +
                    '</div></a>';

            };

            return frameItem;

        },
        _showPopup = function () {

            _searchPopup.addClass( 'is-show' );
            _ajaxRequest();

        },
        _setWrapHeight = function () {

            _searchPopup.css( 'height', _resultWrap.outerHeight() + 37 );

            _searchPopup.on( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                if ( _ps == null ){
                    _initScroll();
                } else {
                    _ps.update();
                }
                _searchPopup.off( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend' );
            } );

        },
        _hidePopup = function () {

            if ( !_searchPopup.hasClass( 'is-show' ) ){
                return false;
            }

            _searchPopup.removeClass( 'is-show' );

            _searchPopup.on( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                _resultWrap.empty();

                if ( _ps !== null ) {
                    _ps.destroy();
                    _ps = null;
                }

                _searchPopup.off( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend' );

            } );


        },
        _initScroll = function () {

            if ( _searchPopupScrollWrap.outerHeight() > _searchPopup.outerHeight() - 37 ){

                var searchPopupScrollWrap = document.querySelector( '.search__popup-scroll-wrap' );

                _ps = new PerfectScrollbar( searchPopupScrollWrap, {
                    suppressScrollX: true
                } );

            }

        },
        _construct = function() {
            _onEvent();
        };

    //public properties

    //public methods

    _construct();

};

var SetSizeIframe = function (obj) {

    //private properties
    var _obj = obj,
        _window = $( window );

    //private methods
    var _onEvent = function() {

            _window.on( 'resize', function () {
                _setSize();
            } );

        },
        _setSize = function () {

            _obj.css( 'height', _obj.outerWidth() / 1.78 + 'px' );

        },
        _construct = function() {
            _onEvent();
            _setSize();
        };

    //public properties

    //public methods

    _construct();

};

var SiteDeco = function ( obj ) {

    var _obj = obj,
        _objPosition = $( '.'+ _obj.data( 'position' ) ).offset().top - _obj.outerHeight() / 4,
        _window = $( window );

    var _onEvent = function () {

            _window.on( 'scroll', function () {
                _paralax();
            } );

        },
        _paralax = function() {

            var curPosition = _window.scrollTop() + _window.outerHeight();

            if ( curPosition >= _objPosition ){
                _obj.css( 'transform', 'translateY('+ ( curPosition - _objPosition ) * -.3  +'px)' );

                var opacity = 1 - ( ( _window.scrollTop() - _obj.offset().top ) / ( _obj.outerHeight() / 1.33 ) );

                if ( 1 > opacity && opacity > 0  ) {
                    _obj.css( 'opacity', opacity );
                }

            }

        },
        _setPosition = function() {

            _obj.css( {
                'top': _objPosition
            }, 600);

        },
        _construct = function() {
            _onEvent();
            _setPosition();
            _paralax();
        };

    _construct()
};

var Stars = function( obj ){

    //private properties
    var _obj = obj,
        _item = _obj.find( 'a' ),
        _active = null;

    //private methods
    var _onEvents = function(){

            _item.on( {
                'mouseover': function() {
                    _item.removeClass( 'active prev' );
                    _hoverStars( $(this).index(), 'hover' );
                },
                'mouseleave': function() {
                    _item.removeClass( 'hover' );

                    if ( _active !== null ){
                        _hoverStars( _active, 'prev' );
                        _item.eq( _active ).addClass( 'active' );
                    }

                },
                'click': function () {
                    _item.removeClass( 'prev' );
                    _active = $(this).index();
                    _hoverStars( $(this).index(), 'prev' );
                }
            } );

        },
        _hoverStars = function( item, name ){

            for( var n = 0; n <= item; n++ ){
                _item.eq( n ).addClass( name );
            }

        },
        _construct = function(){
            _onEvents();
        };

    //public properties

    //public methods

    _construct();

};

var SwiperPopup = function ( obj, index ) {

    var _obj = obj,
        _html = $( 'html' ),
        _body = $( 'body' ),
        _site = $( '.site' ),
        _links = _obj.find( '.book__gallery-item' ),
        _window = $( window ),
        _popup = null,
        _popupInner = null,
        _popupClose = null,
        _swiperWrapper = null,
        _swiperContainer = null,
        _swiperBtnNext = null,
        _swiperBtnPrev = null,
        _swiper = null,
        _position = 0;

    var _addEvents = function(){

            _popupInner.parent().on( 'click', function() {
                _closePopup();
            } );

            _popupInner.on( 'click', function( event ) {
                event.stopPropagation();
            } );

            _popupClose.on( 'click', function() {
                _closePopup();
                return false;
            } );

        },
        _addingVariables = function(){

            _popup = $( '<div class="swiper-popup">\
                                    <div class="swiper-container">\
                                        <a href="#" class="swiper-popup__close"></a>\
                                        <div class="swiper-wrapper"></div>\
                                        <div class="swiper-button-next"></div>\
                                        <div class="swiper-button-prev"></div>\
                                    </div>\
                                </div>' );
            _swiperWrapper = _popup.find( '.swiper-wrapper' );
            _swiperContainer = _popup.find( '.swiper-container' );
            _swiperBtnNext = _popup.find( '.swiper-button-next' );
            _swiperBtnPrev = _popup.find( '.swiper-button-prev' );

        },
        _buildPopup = function(){

            _addingVariables();
            _contentFilling();
            _initSwiper();
            _swiper.slideTo( index, 0 );
            _popup.addClass( 'active' );
            _setStyles();

        },
        _closePopup = function(){

            _popup.removeClass( 'active' );

            _popup.on( 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {

                _html.removeAttr( 'style' );
                _body.removeAttr( 'style' );
                _site.removeAttr( 'style' );

                _window.scrollTop( _position );
                _position = 0;

                _popup.remove();

            } );

        },
        _contentFilling = function(){

            $.each( _links, function(){

                var innerContent = null,
                    innerImg = null,
                    dataSRC = null,
                    innerTitle = null,
                    preloader = null;

                preloader = '';
                innerContent = $( this ).children( 'img' );
                innerImg = '<img src="' + innerContent.attr( 'src' ) + '">';
                dataSRC = '';

                var newItem = $( '<div class="swiper-slide">\
                                        <div class="swiper-popup__inner" ' + dataSRC + '>\
                                            ' + preloader + '\
                                            ' + innerImg + '\
                                        </div>\
                                    </div>' );

                _swiperWrapper.append( newItem );

            } );

            _body.append( _popup );

            _popupInner = _popup.find( '.swiper-popup__inner' );
            _popupClose = _popup.find( '.swiper-popup__close' );

        },
        _getScrollWidth = function (){

            var scrollDiv = document.createElement( 'div'),
                scrollBarWidth;

            scrollDiv.className = 'popup__scrollbar-measure';

            document.body.appendChild( scrollDiv );

            scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

            document.body.removeChild(scrollDiv);

            return scrollBarWidth;

        },
        _initSwiper = function(){

            _swiper = new Swiper( _swiperContainer, {
                slidesPerView: 1,
                threshold: 10,
                navigation: {
                    nextEl: _swiperBtnNext,
                    prevEl: _swiperBtnPrev
                }
            });

        },
        _construct = function () {
            _buildPopup();
            _addEvents();
        },
        _setStyles = function(){

            if ( _window.scrollTop() !== 0 ){
                _position = _window.scrollTop();
            }

            _html.css( {
                overflowY: 'hidden',
                paddingRight: _getScrollWidth()
            } );

            _body.css( 'overflow-y', 'hidden' );

            _site.css( {
                'position': 'relative',
                'top': _position * -1
            } );

        };

    _construct();

};

var Tabs = function( obj ) {

    //private properties
    var _obj = obj,
        _self = this,
        _tabBtnWrap = _obj.find( '.tabs__items-wrap' ),
        _tabScrollContent = _tabBtnWrap.find( '.tabs__items-scroll' ),
        _tabBtn = _tabBtnWrap.find( '.tabs__item' ),
        _tabWrap = _obj.find( '.tabs__wrap' ),
        _tabContent = _tabWrap.find( '.tabs__content' ),
        _scrollWrap,
        _ps = null,
        _swiper = null,
        _window = $( window );

    //private methods
    var _onEvent = function() {

            _tabBtn.on( 'click', function () {
                var curBtn = $( this ),
                    curBtnIndex = curBtn.index();

                _showTabWrap( curBtnIndex );

            } );

            _window.on( 'resize', function () {
                _setContentHeight();
            } );

        },
        _showTabWrap = function ( num ) {

            var curTabIndex = num,
                curTabBtn = _tabBtn.eq( curTabIndex ),
                activeContent = _tabContent.eq( curTabIndex );

            _tabBtn.removeClass( 'is-active' );
            curTabBtn.addClass( 'is-active' );

            _tabContent.removeClass( 'is-show' );
            activeContent.addClass( 'is-show' );

            _setContentHeight();
            _initSlider();

        },
        _initSlider = function (  ) {

            var activeContent = _tabContent.filter( '.is-show' ),
                swiperSlider = activeContent.find( '.swiper-container' ),
                swiperSlide = activeContent.find( '.swiper-slide' );

            if ( swiperSlider === undefined || swiperSlider.length === 0 ) {

                if ( _swiper !== null ){
                    _swiper.destroy();
                    _swiper = null;
                }

                return false;

            }

            if ( _swiper == null && swiperSlide.length > 1 ) {

                var swiperPagination = _obj.find( '.pagination' );

                _swiper = new Swiper( swiperSlider, {
                    effect: 'slider',
                    speed: 500,
                    spaceBetween: 30,
                    loop: true,
                    slidesPerView: 1,
                    threshold: 10,
                    pagination: {
                        el: swiperPagination,
                        clickable: true
                    },
                    on: {
                        init: function () {

                            _setContentHeight();

                            var image = swiperSlide.eq(0).find( 'img' );

                            image.on ( 'load', function () {
                                _setContentHeight();
                            } );

                        }
                    }
                } );

            } else if ( swiperSlide.length == 1 ){

                var image = swiperSlide.find( 'img' );

                image.on ( 'load', function () {
                    _setContentHeight();
                } );

            }

        },
        _setContentHeight = function () {

            var activeContent = _tabContent.filter( '.is-show' );

            _tabWrap.css( 'height', activeContent.outerHeight() );

        },
        _initScroll = function () {

            if ( _ps !== null ) {
                _ps.destroy();
                _ps = null;
            }

            _scrollWrap = document.querySelector( '.tabs__items-scroll' );

            if ( _tabScrollContent.outerWidth() > _window.outerWidth() ) {

                _ps = new PerfectScrollbar( _scrollWrap, {
                    suppressScrollY: true
                } );

                _scrollToActive();

            }

        },
        _scrollToActive = function () {

            var activeItem = _tabBtnWrap.find( '.is-active' );

            if ( activeItem.length > 0 ){

                var windowWidth = _window.outerWidth(),
                    wrapWidth = activeItem.offset().left;

                _scrollWrap.scrollLeft = wrapWidth/2 - windowWidth/2 + wrapWidth;

            }

        },
        _checkActive = function () {

            var activeTabBtn = _tabBtn.filter( '.is-active' );

            if ( activeTabBtn.length > 0 ) {
                activeTabBtn.trigger( 'click' )
            } else {
                _tabBtn.eq( 0 ).trigger( 'click' );
            }

        },
        _construct = function() {
            _onEvent();
            _initScroll();
            _checkActive();

            _obj[0].obj = _self

        };

    //public properties

    //public methods
    _self.setHeight = function () {
        _setContentHeight();
    };

    _construct();
};

var TrueUser = function( obj ){

    //private properties
    var _obj = obj;

    //private methods
    var _construct = function(){
            localStorage.setItem( 'trueUser', true )
        };

    //public properties

    //public methods

    _construct();

};