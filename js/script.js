function renderTimeline(data) {
    $('main').append(
        `
            <div class="timeline">
                <a href="#">
                    <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png" alt="">
                </a>
                <div class="timeline-contents">
                    <div class="user-information">
                        <a href="#" class="user-name">
                            ${data.userName}
                        </a>
                        <span class="user-id">
                            ${data.userId}
                        </span>
                    </div>
                    <div class="tweet-text">
                        ${data.tweet}
                    </div>
                </div>
            </div>
        `
    );
}

$('.tweet-btn').on('click', function() {
    var textValue = $('#text').val()
    $.ajax({
        url:`https://script.google.com/macros/s/AKfycbye6MAPdesaKexQchHG_G3C9yAkWkrEsW-NA69CD0VMIebgH9Y/exec?type=post&userid=hhh&username=kkk&tweet=${textValue}`,
        
    })
    .done(  (result) => {
        renderTimeline(result.data)
        $('#text').val('')
    })
})

$(function() {
    $.ajax({
        url:'https://script.google.com/macros/s/AKfycbye6MAPdesaKexQchHG_G3C9yAkWkrEsW-NA69CD0VMIebgH9Y/exec'
    })
    .done( (result) => {
        $.each(result.data, function(_index, element) {
            renderTimeline(element)
        })
    })
})