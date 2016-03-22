jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.progress-bar').css('width', '0');
    
    $(window).on('load', function() {

        $('.progress-bar').each(function() {
        
            var itemWidth = $(this).data('value');
            
            $(this).animate({
                width: itemWidth
            }, 1600);
            
        });

    });
    

    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFast',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );

    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    // GitHubActivity.feed({ username: "caseyscarborough", selector: "#ghfeed" });


});

$(document).ready(function(){
    var my_posts = $("[rel=tooltip]");

    var size = $(window).width();
    for(i=0;i<my_posts.length;i++){
        the_post = $(my_posts[i]);

        if(the_post.hasClass('invert') && size >=767 ){
            the_post.tooltip({ placement: 'left'});
            the_post.css("cursor","pointer");
        }else{
            the_post.tooltip({ placement: 'rigth'});
            the_post.css("cursor","pointer");
        }
    }
});
