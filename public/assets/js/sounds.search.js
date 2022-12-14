$(document).ready(function(){
    function initialWidth(){
        if(window.screen.width === 360){
            $(".grid-option-container").addClass("hidden");
            const episodesContainer = $(".episodes-container");
            episodesContainer.removeClass("grid-3");
            episodesContainer.removeClass("grid-4");
            episodesContainer.removeClass("grid-list");
            episodesContainer.addClass("grid-list");
            $(".episode-item > .data > .duration-release").removeClass("hidden");

        }else{
            $(".grid-option-container").removeClass("hidden");
            $('.grid-option-container > button').each(function(){
                if(this.classList.contains("grid-list")){
                    $('.grid-option-container > button').btnActive = this;
                    this.classList.add("active");
                }
                
            })
        }
    }

    initialWidth();
    $(window).resize(()=>{
        $('.grid-option-container > button').removeClass("active");
        $('.grid-option-container > button').removeClass("hover");
        initialWidth();
        
    })
   
    const gridOptionBtn = $('.grid-option-container > button');

    gridOptionBtn.each(function(){
        if(this.classList.contains('active')){
            gridOptionBtn.btnActive = this;
            return 0;  
        }
        
    });

    gridOptionBtn.on('mouseleave',function(){
        gridOptionBtn.removeClass('hover');
        $(gridOptionBtn.btnActive).addClass('active');
    });

    gridOptionBtn.on('mouseenter',function(){
        gridOptionBtn.removeClass('active')
        $(this).addClass('hover');
    });

    gridOptionBtn.on('mouseup',function(){
        function setActive(element){
            $(element).addClass("active");
        }
        

        
        
        gridOptionBtn.removeClass("active");
        setActive(this);
        gridOptionBtn.btnActive = this; 
        const episodesContainer = $(".episodes-container");
        episodesContainer.removeClass("grid-3");
        episodesContainer.removeClass("grid-4");
        episodesContainer.removeClass("grid-list");
        if(this.dataset.grid === 'list'){
           episodesContainer.addClass("grid-list");
           $(".episode-item > .data > .duration-release").removeClass("hidden");
        }else if(this.dataset.grid ==="tColoumns"){
            episodesContainer.addClass("grid-3");
            $(".episode-item > .data > .duration-release").addClass("hidden");
        }else if(this.dataset.grid ==="fColoumns"){
            episodesContainer.addClass("grid-4");
            $(".episode-item > .data > .duration-release").addClass("hidden");
        }
    });
});