jQuery(document).ready($ => {


    $('.btn-registrarse a').on('click', function() {
        var linkCliente = 'registroCliente.html';
        var linkAdmin = 'registroEstablecimiento.html';
        Swal.fire({
            title: '¿Cómo desea registrarse?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Establecimiento`,
            denyButtonText: `Cliente`,
            cancelButtonText: `Volver`,
            buttonsStyling: false,
            customClass: 'swal-wide'
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.href = linkAdmin;
            } else if (result.isDenied) {
                window.location.href = linkCliente;
            }
        })

    });

    //Subir imagen vista previa
    $(document).ready(function() {
        $('.upload').click(function() {
            $('.filefield').trigger('click');
        })
        $('.filefield').change(function() {
            if ($(this).val() != '') {
                $('.overlay_uploader').show();
                $('.spinner').show();
                readURL2(this);
            }
        })
    })

    function readURL2(input) {
        if (input.files[0].type == 'image/jpeg' || input.files[0].type == 'image/png') {
            $.each(jQuery(input)[0].files, function(i, file) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('.overlay_uploader').hide();
                    $('.spinner').hide();
                    $('.img').attr("src", e.target.result);
                    $('.img-defecto').attr("src", "");
                    // $('.box').css('background-image', 'url(' + e.target.result + ')');
                }
                reader.readAsDataURL(input.files[0]);
            });
        } else {
            $('.overlay_uploader').hide();
            $('.spinner').hide();
            alert("Solo se permiten archivos .jpg y .png");
        }
    }

    let contador = 0;
    $(".menu-bar").on('click', function() {
        if (contador == 0) {
            $('.hero-header-nav').removeClass('left-100');
            $('.hero-header-nav').addClass('show-menu');
            contador = 1;
        } else {
            $('.hero-header-nav').removeClass('show-menu');
            contador = 0;
        }

    });


});