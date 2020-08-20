$(function() {
    $.ajax({
        url:'https://script.googleusercontent.com/macros/echo?user_content_key=xQ4E_BGsTjUHbkA2uNzsPVF_kFsEdKI3zKXRju9rRSzNVARhAcR4PfWfxZBtb9gyOExgy-tv0ZulRNUXlsWUHt9-sB-1ExcQm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKhYSpijLKm9ry_16E7dOXB2Ll1leWt5x4qy7dquTyYZuvmKQVUbD-cImi6t7tipiOIqWsDnSrEd&lib=Mqjqe7vZuLu6mVtNW2QQbP-Yg69CV_lri'
    })
    $('.tweet-btn').on('click',function() {
        done( (data) => {
            console.log(data);
        })
    })
})