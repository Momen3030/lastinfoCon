import { Component, Element, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'info-graphic',
  styleUrl: 'info-graphic.css',
  shadow: true,
})
export class InfoGraphic {

  @Element() el: HTMLElement;

  @Prop() content: string;
  @State() satate: any[] = [];
  @Event() updateSatisfiedEvent: EventEmitter<any>;

  @Prop() centerImg: string = "https://cdn.pixabay.com/photo/2020/03/31/03/05/virus-4986063_960_720.png";
  @Prop() centerText: string = "هذا نص افتراضي";
  @Prop() iconsNumber: number;
  @Prop() iconImgOne: string;
  @Prop() iconImgTwo: string;
  @Prop() iconImgThree: string;
  @Prop() iconImgFour: string;
  @Prop() iconImgFive: string;
  @Prop() centerColor: string;
  @Prop() iconAcitveColor: string;
  // @Prop() content:string;

  @Prop() iconTitleOne: string;
  @Prop() iconTitleTwo: string;
  @Prop() iconTitleThree: string;
  @Prop() iconTitleFour: string;
  @Prop() iconTitleFive: string;

  @Prop() iconHeaderOne: string;
  @Prop() iconHeaderTwo: string;
  @Prop() iconHeaderThree: string;
  @Prop() iconHeaderFour: string;
  @Prop() iconHeaderFive: string;


  @Prop() iconBodyOne: string;
  @Prop() iconBodyTwo: string;
  @Prop() iconBodyThree: string;
  @Prop() iconBodyFour: string;
  @Prop() iconBodyFive: string;
  @Prop() boxColor: string;

  private getContent(): any {

    const con = JSON.parse(this.content);
    return con.attributes;
  }



  getInfo(id, ind) {

    let infoBox = this.el.shadowRoot.querySelector('#infoBox');
    let item = this.el.shadowRoot.querySelectorAll('.circular-menu__item');
    item.forEach((item2, index) => {

      if (index == ind) {

        (item2 as HTMLElement).style.backgroundColor = (this.iconAcitveColor ? this.iconAcitveColor : '#85d98f');

      }
      else {
        (item2 as HTMLElement).style.backgroundColor = null;
      }
    })
    let obj = this.CircalImagTitle.find(p => (p.id == id));
    infoBox.innerHTML = " ";
    infoBox.innerHTML += `<p>  <h1> ${obj.header ? obj.header : ''} </h1> </p>`;
    infoBox.innerHTML += `<p>  <h4> ${obj.body ? obj.body : ''} </h4> </p>`;
    //  this.satate.push({index:ind,clicked:false});

    // const obj2=this.satate.find((o)=>o.index==ind);
    const obj2 = this.satate.findIndex((o) => o.index == ind);
    this.satate[obj2]["clicked"] = true;
    // console.log(obj2);
    // console.log(this.satate);
    if (this.satate.every((ox) => ox.clicked)) {

      this.updateSatisfiedEvent.emit(this.content)

      console.log("All clicked");

    }

    // this.satate[ind]=true;

  }

  CircalImagTitle: ImgTitle[] = [
    {
      img: "https://www.flaticon.com/svg/static/icons/svg/599/599979.svg", title: "هذا نص افتراضي ",
      header: " اختبار لعنوان الصورة الاولي ",
      body: ' اختبار لنص الصورة الاولي',
      id: "item1"
    },
    {
      img: "https://www.flaticon.com/svg/static/icons/svg/2328/2328501.svg", title: "هذا نص افتراضي",

      header: " اختبار لعنوان الصورة الثانيه ",
      body: ' اختبار لنص الصورة الثانيه',
      id: "item2"
    },
    {
      img: "https://www.flaticon.com/svg/static/icons/svg/2913/2913365.svg", title: "هذا نص افتراضي ",
      header: " اختبار لعنوان الصورة الثالثه ",
      body: ' اختبار لنص الصورة الثالثه',
      id: "item3"
    }
    ,
    {
      img: "https://www.flaticon.com/svg/static/icons/svg/2328/2328501.svg", title: "هذا نص افتراضي ",
      header: " اختبار لعنوان الصورة الرابعه ",
      body: ' اختبار لنص الصورة الرابعه',
      id: "item4"
    }
    ,
    {
      img: "https://www.flaticon.com/svg/static/icons/svg/2328/2328501.svg", title: "هذا نص افتراضي ",
      header: " اختبار لعنوان الصورة الخامسه ",
      body: ' اختبار لنص الصورة الخامسه',
      id: "item5"
    }

  ]
  constructor() {
    for (let i = 0; i < this.getContent().iconsNumber; i++) {
      this.satate.push({ index: i, clicked: false });
    }
    

    if (this.CircalImagTitle.length != this.getContent().iconsNumber) {
      let slice = this.CircalImagTitle.length - this.getContent().iconsNumber;
      this.CircalImagTitle.splice(0, slice);
      if (this.getContent().iconsNumber == 1) {
        this.CircalImagTitle.length = 0;
        this.CircalImagTitle.push({
          img: (this.getContent().iconOne.img ? this.getContent().iconOne.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconOne.title ? this.getContent().iconOne.title : 'هذا نص افتراضي')
          , header: (this.getContent().iconOne.header)
          , body: (this.getContent().iconOne.body),
          id: "item1"
        });
      } else if (this.getContent().iconsNumber == 2) {
        this.CircalImagTitle.length = 0;
        this.CircalImagTitle.push({
          img: (this.getContent().iconOne.img ? this.getContent().iconOne.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconOne.title ? this.getContent().iconOne.title : 'هذا نص افتراضي')
          , header: (this.getContent().iconOne.header)
          , body: (this.getContent().iconOne.body),
          id: "item1"
        },
          {
            img: (this.getContent().iconTwo.img ? this.getContent().iconTwo.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconTwo.title ? this.getContent().iconTwo.title : 'هذا نص افتراضي')
            , header: (this.getContent().iconTwo.header)
            , body: (this.getContent().iconTwo.body),
            id: "item2"
          });

      } else if (this.getContent().iconsNumber == 3) {
        this.CircalImagTitle.length = 0;
        this.CircalImagTitle.push({
          img: (this.getContent().iconOne.img ? this.getContent().iconOne.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconOne.title ? this.getContent().iconOne.title : 'هذا نص افتراضي')
          , header: (this.getContent().iconOne.header)
          , body: (this.getContent().iconOne.body),
          id: "item1"
        },
          {
            img: (this.getContent().iconTwo.img ? this.getContent().iconTwo.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconTwo.title ? this.getContent().iconTwo.title : 'هذا نص افتراضي')
            , header: (this.getContent().iconTwo.header)
            , body: (this.getContent().iconTwo.body),
            id: "item2"
          },
          {
            img: (this.getContent().iconThree.img ? this.getContent().iconThree.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconThree.title ? this.getContent().iconThree.title : 'هذا نص افتراضي')
            , header: (this.getContent().iconThree.header)
            , body: (this.getContent().iconThree.body),
            id: "item3"

          }
        );

      } else if (this.getContent().iconsNumber == 4) {
        this.CircalImagTitle.length = 0;
        this.CircalImagTitle.push({
          img: (this.getContent().iconOne.img ? this.getContent().iconOne.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconOne.title ? this.getContent().iconOne.title : 'هذا نص افتراضي')
          , header: (this.getContent().iconOne.header)
          , body: (this.getContent().iconOne.body),
          id: "item1"
        },
          {
            img: (this.getContent().iconTwo.img ? this.getContent().iconTwo.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconTwo.title ? this.getContent().iconTwo.title : 'هذا نص افتراضي')
            , header: (this.getContent().iconTwo.header)
            , body: (this.getContent().iconTwo.body),
            id: "item2"
          },
          {
            img: (this.getContent().iconThree.img ? this.getContent().iconThree.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconThree.title ? this.getContent().iconThree.title : 'هذا نص افتراضي')
            , header: (this.getContent().iconThree.header)
            , body: (this.getContent().iconThree.body),
            id: "item3"

          },
          {
            img: (this.getContent().iconFour.img ? this.getContent().iconFour.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconFour.title ? this.getContent().iconFour.title : 'هذا نص افتراضي')
            , header: (this.getContent().iconFour.header)
            , body: (this.getContent().iconFour.body),
            id: "item4"

          }
        );
      }

    } else {
      this.CircalImagTitle.length = 0;
      this.CircalImagTitle.push({
        img: (this.getContent().iconOne.img ? this.getContent().iconOne.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconOne.title ? this.getContent().iconOne.title : 'هذا نص افتراضي')
        , header: (this.getContent().iconOne.header)
        , body: (this.getContent().iconOne.body),
        id: "item1"
      },
        {
          img: (this.getContent().iconTwo.img ? this.getContent().iconTwo.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconTwo.title ? this.getContent().iconTwo.title : 'هذا نص افتراضي')
          , header: (this.getContent().iconTwo.header)
          , body: (this.getContent().iconTwo.body),
          id: "item2"
        },
        {
          img: (this.getContent().iconThree.img ? this.getContent().iconThree.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconThree.title ? this.getContent().iconThree.title : 'هذا نص افتراضي')
          , header: (this.getContent().iconThree.header)
          , body: (this.getContent().iconThree.body),
          id: "item3"

        },
        {
          img: (this.getContent().iconFour.img ? this.getContent().iconFour.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconFour.title ? this.getContent().iconFour.title : 'هذا نص افتراضي')
          , header: (this.getContent().iconFour.header)
          , body: (this.getContent().iconFour.body),
          id: "item4"

        },
        {
          img: (this.getContent().iconFive.img ? this.getContent().iconFive.img : 'https://www.flaticon.com/svg/static/icons/svg/599/599979.svg'), title: (this.getContent().iconFive.title ? this.getContent().iconFive.title : 'هذا نص افتراضي')
          , header: (this.getContent().iconFive.header)
          , body: (this.getContent().iconFive.body),
          id: "item5"

        }
      );

    }

  }
  componentDidLoad() {

    let menus = this.el.shadowRoot.querySelectorAll('.circular-menu');
    menus.forEach((menu) => {
      var items = menu.querySelectorAll('.circular-menu__item');
      let button = menu.querySelector('.circular-menu__button');
      var active = false;
      const length = items.length;
      const arc = 2 * Math.PI * (1 / length);
      const radius = 75;
      button.addEventListener('click', (e) => {
        e.preventDefault();
        active = !active;
        if (active) {
          button.classList.add('circular-menu__button_active');
          for (let i = 0; i < length; i++) {
            const angle = i * arc;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            (items[i] as HTMLDivElement).style.left = 50 + x + '%';
            (items[i] as HTMLDivElement).style.top = 50 + y + '%';

          }

        } else {

          button.classList.remove('circular-menu__button_active');
          for (let i = 0; i < length; i++) {
            (items[i] as HTMLDivElement).style.left = '50%';
            (items[i] as HTMLDivElement).style.top = '50%';
          }

        }

      });
    });









  }
  render() {

    return (
      <div class="NeueFrutigerWorld">
        <article id="infoBox" style={{ 'direction': 'rtl', 'background': `${this.getContent().boxColor}` }}>

        </article>
        <div class="circular-menu" style={{ 'cursor': 'pointer' }}>
          {this.CircalImagTitle.map((item, i) =>
            <div
              // class={ 'circular-menu__item' + (this.satate[i]["clicked"]?' active' : ' inactive') }
              class="circular-menu__item"
              style={{ 'background-image': `url(${item.img})` }}
              onClick={this.getInfo.bind(this, item.id, i)}>
              <span class="coupontooltip">   {item.title}    </span>
            </div>
          )}

          <div class="circular-menu__button" style={{ 'background-color': `${this.getContent().centerColor}` }}>
            
            <img class="coronaImg" style={{ 'width': '50px', 'height': '50px'  }} src={this.getContent().centerImg} />
             
            <p>{this.getContent().centerText}</p>
            <span class="circular-menu__lines"></span>
          </div>

        </div>

      </div>
    );
  }
}

export interface ImgTitle {
  img: string;
  title: string;
  header?: string;
  body?: string;
  id?: string
}
