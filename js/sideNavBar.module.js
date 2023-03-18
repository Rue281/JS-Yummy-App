import { Ui } from "./ui.module.js";

export class SideNavBar{
    constructor(){
        
        this.ui = new Ui();
        
    }
    openNav(){
    
    $(".side-nav").animate({left: 0},500);
    for (let i = 0; i < 5; i++) {
      $(".nav-tabs .list-unstyled li").eq(i).animate({top: 0}, (i + 5) * 100)
    }
}

    closeNav(){
    let navTabsWidth = $(".nav-tabs").outerWidth();
    console.log(navTabsWidth);

    $(".side-nav").animate({left: `-${navTabsWidth}px`},500);
    $(".nav-tabs .list-unstyled li").animate({top: 300}, 500)
}
}