import { useState } from "react";
import s from "./Body.module.scss";
import { useEffect } from "react";

import line_body from '../image/Line_8.svg'

const Body = () => {
  const [size, setSize] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize)

    if(screenWidth <= 480) {
      setSize(true)
    } else {
      setSize(false)
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [screenWidth, setScreenWidth]);

  
  console.log(size)

  

  return (
    <div className={s.body}>
      <div className={s.body_left}>
        <p className={s.body_left_title}>
          Зарабатывайте больше <br />
          <span className={s.body_left_title_child}>с WELBEX</span>
        </p>
        <p className={s.body_left_subtitle}>
          Развиваем и контролируем продажи за вас
        </p>
      </div>

      <div className={s.body_right}>
        <p className={s.body_right_title}>
          Вместе с 
          <span className={s.body_right_title_child}>бесплатной</span> <br />
          <span className={s.body_right_title_child}>консультацией</span>{" "}
          мы дарим:
        </p>
        {size ? <>



          <div className={s.body_right_item}>
            <p className={s.body_right_item_child_resize}><img className={s.line_body} src={line_body} alt="icon" /> Skype аудит</p>
             <p className={s.body_right_item_child_resize}><img className={s.line_body} src={line_body} alt="icon" /> 30 виджетов</p>
          </div>

          <div className={s.body_right_item}>
            <p className={s.body_right_item_child_resize}><img className={s.line_body} src={line_body} alt="icon" /> Dashboard</p>
             <p className={s.body_right_item_child_resize}><img className={s.line_body} src={line_body} alt="icon" /> Месяц аmoCRM</p>
          </div>
        </>
        
        
        : <>



        <div className={s.body_right_item}>
          <div className={s.body_right_item_child}>
            <p className={s.body_right_item_child_title}>Виджеты</p>
            <p className={s.body_right_item_child_subtitle}>
              30 готовых решений
            </p>
          </div>

          <div className={s.body_right_item_child}>
            <p className={s.body_right_item_child_title}>Dashboard</p>
            <p className={s.body_right_item_child_subtitle}>
              с показателями вашего бизнеса
            </p>
          </div>
        </div>

        <div className={s.body_right_item}>
          <div className={s.body_right_item_child}>
            <p className={s.body_right_item_child_title}>Skype Аудит</p>
            <p className={s.body_right_item_child_subtitle}>
              отдела продаж <br />
               и CRM системы
            </p>
          </div>
          <div className={s.body_right_item_child}>
            <p className={s.body_right_item_child_title}>35 дней</p>
            <p className={s.body_right_item_child_subtitle}>
              использования CRM
            </p>
          </div>
        </div>

        </>
        
      }
        

        <button className={s.body_right_button}>Получить консультацию</button>
      </div>
    </div>
  );
};

export default Body;
