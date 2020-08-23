function renderTimeline(data) {
    $.each(data, function(_index, element) {
        $('main').append(
            `
                <div class="timeline">
                    <a href="#">
                        <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png" alt="">
                    </a>
                    <div class="timeline-contents">
                        <div class="user-information">
                            <a href="#" class="user-name">
                                ${element.userName}
                            </a>
                            <span class="user-id">
                                ${element.userId}
                            </span>
                        </div>
                        <div class="tweet-text">
                            ${element.tweet}
                        </div>
                    </div>
                </div>
            `
        );
    })
}

$(function() {
    $.ajax({
        url:'https://script.googleusercontent.com/macros/echo?user_content_key=xQ4E_BGsTjUHbkA2uNzsPVF_kFsEdKI3zKXRju9rRSzNVARhAcR4PfWfxZBtb9gyOExgy-tv0ZulRNUXlsWUHt9-sB-1ExcQm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKhYSpijLKm9ry_16E7dOXB2Ll1leWt5x4qy7dquTyYZuvmKQVUbD-cImi6t7tipiOIqWsDnSrEd&lib=Mqjqe7vZuLu6mVtNW2QQbP-Yg69CV_lri'
    })
    .done( (result) => {
        renderTimeline(result.data)
    })
})