$( function () {

    "use strict";

    $.each( $( '.contact-us__form' ), function() {
        new ContactForm ( $( this ) );
    } );

    $.each( $( '.contact-us__file-field' ), function() {
        new LabelFileItem ( $( this ) );
    } );

} );

var ContactForm = function( obj ){

    //private properties
    var _obj = obj,
        _btn = _obj.find( 'button' ),
        _url = $( 'body' ).data( 'action' ),
        _request = new XMLHttpRequest(),
        _validation = new FormValidator( _obj ),
        _popup = $( '.popup' ),
        _timer;

    //private methods
    var _construct = function(){
            _onEvent();
        },
        _onEvent = function(){

            _obj.on( 'submit', function (e) {
                e.preventDefault();

                _obj.addClass( 'is-loading' );

                if ( _validation.valid === true ) {
                    _ajaxSend();
                } else {
                    _obj.removeClass( 'is-loading' );
                }

            } );

        },
        _ajaxSend = function(){

            var formData = new FormData( _obj[0] );
            formData.append( 'action', 'send_contact_form' );

            _request = $.ajax( {
                url: _url,
                dataType: 'html',
                timeout: 20000,
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                cache: false,
                success: function (data) {
                    _showSuccessMessage();
                },
                error: function (XMLHttpRequest) {
                    if (XMLHttpRequest.statusText != 'abort') {
                        alert(XMLHttpRequest.statusText);
                    }
                }
            } );
            return false;

        },
        _showSuccessMessage = function () {

            _obj.removeClass( 'is-loading' );

            _obj[0].reset();
            $( '.contact-us__file-field' )[0].obj.emptyField();

            _popup[0].obj.openPopup( _btn );

            _timer = setTimeout( function () {
                _popup[0].obj.closePopup();
                clearTimeout( _timer );
                _timer = null;
            }, 5000 );

        };

    //public properties

    //public methods

    _construct();

};

var LabelFileItem = function( obj ) {

    //private properties
    var _obj = obj,
        _self = this,
        _labelText = _obj.find( 'span' ),
        _placeholder = _labelText.text(),
        _input = _obj.find( 'input[type=file]' );

    //private methods
    var _onEvent = function() {

            _input.on( 'change', function () {

                var name = _input.val();

                if ( name !== '' ) {

                    var format = name.split('.').pop();

                    if ( format == 'jpg' || format == 'png' || format == 'pdf' ) {

                        _labelText.text( name.split('\\').pop() );
                        _obj.addClass( 'is-full' );

                    } else {
                        _emptyField();
                    }

                } else {
                    _emptyField();
                }

            } );

        },
        _emptyField = function(){

            _labelText.text( _placeholder );
            _obj.removeClass( 'is-full' );

        },
        _init = function() {
            _onEvent();
            _obj[ 0 ].obj = _self;
        };

    //public properties

    //public methods
    _self.emptyField = function () {
        _emptyField();
    };

    _init();
};

var ZendeskCreateTicketForm = function( obj ){

    //private properties
    var _obj = obj,
        _nameFielder = _obj.find( 'input[name=subscribe-name]' ),
        _emailFielder = _obj.find( 'input[name=subscribe-email]' ),
        _subjectFielder = _obj.find( 'input[name=subscribe-subject]' ),
        _messageFielder = _obj.find( 'textarea[name=subscribe-message]' ),
        _fileFielder = _obj.find( 'input[type=file]' ),
        _url = $( 'body' ).data( 'action' ),
        _btn = _obj.find( 'button' ),
        _validation = new FormValidator( _obj ),
        _request = new XMLHttpRequest(),
        _popup = $( '.popup' ),
        _uploadFiles = null,
        _fileToken = null,
        _timer = null;

    //private methods
    var _construct = function(){
            _onEvent();
        },
        _onEvent = function(){

            _fileFielder.on( 'change', function (e) {
                _uploadFiles = e.target.files;
            } );

            _obj.on( 'submit', function (e) {
                e.preventDefault();

                _obj.addClass( 'is-loading' );

                if ( _validation.valid === true ) {

                    if ( _uploadFiles !== null && _uploadFiles.length > 0 ) {
                        _ajaxSendFile();
                    } else {
                        _ajaxCreateTicket();
                    }

                } else {
                    _obj.removeClass( 'is-loading' );
                }

            } );

        },
        _ajaxSendFile = function(){

            var formData = new FormData();

            formData.append( 'action', 'send_file' );

            $.each( _uploadFiles, function( key, value ) {
                formData.append( key, value );
            } );

            _obj.addClass( 'is-loading' );

            _request.abort();
            _request = $.ajax( {
                url: _url,
                dataType: 'json',
                timeout: 20000,
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                cache: false,
                success: function ( data ) {
                    _fileToken = data['upload']['token'];
                    _ajaxCreateTicket();
                },
                error: function (XMLHttpRequest) {
                    if (XMLHttpRequest.statusText != 'abort') {
                        alert(XMLHttpRequest.statusText);
                    }
                }
            } );
            return false;

        },
        _ajaxCreateTicket = function(){

            _request.abort();
            _obj.addClass( 'is-loading' );

            _request = $.ajax( {
                url: _url,
                dataType: 'json',
                timeout: 20000,
                type: "POST",
                data: {
                    action: 'subscribe_form',
                    name: _nameFielder.val(),
                    email: _emailFielder.val(),
                    subject: _subjectFielder.val(),
                    message: _messageFielder.val(),
                    file: _fileToken
                },
                success: function ( data ) {
                    _showSuccessMessage();
                },
                error: function (XMLHttpRequest) {
                    if (XMLHttpRequest.statusText != 'abort') {
                        alert(XMLHttpRequest.statusText);
                    }
                }
            } );
            return false;

        },
        _showSuccessMessage = function () {

            _obj.removeClass( 'is-loading' );
            _obj[0].reset();

            _popup[0].obj.openPopup( _btn );

            _timer = setTimeout( function () {
                _popup[0].obj.closePopup();
                clearTimeout( _timer );
                _timer = null;
            }, 5000 );

        };

    //public properties

    //public methods

    _construct();

};
