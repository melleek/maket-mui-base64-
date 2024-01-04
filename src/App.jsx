import { Button, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import "./App.css"

//swiper 1
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Card2 from './components/Card2';

//animation swiper 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';
import Card1 from './components/Card1';
// import required modules




 const api = "http://localhost:3000/data"

function App() {

  //Translate 
  const [lng, setImg] = useState("en")
  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }


  const [base64F, setBase64F] = useState(null)
  const [base64F1, setBase64F1] = useState(null)
  const [todo, setTodo] = useState([])
  const [idx, setIdx] = useState(null)
  const [dialog, setDialog] = useState(false)

  const handleImg = (file) => {
    setBase64F(file.base64)
  }

  const handleImg1 = (file) => {
    setBase64F1(file.base64)
  }

  async function get() {
    try {
      let { data } = await axios.get(api)
      setTodo(data)

    } catch (error) {
      console.log(error);
    }
  }

  async function addUser() {
    try {
      let { data } = await axios.post(api, {
        file: base64F
      });
      get()
      setBase64F("")
    } catch (error) {
      console.log(error);
    }
  }

  async function editUser(idx) {
    try {
      let { data } = await axios.put(`${api}/${idx}`, {
        file: base64F1
      });
      get()
    } catch (error) {

    }
  }
  async function delUser(id){
    try {
      const { data } = await axios.delete(`${api}/${id}`)
      get()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get()
  }, [])



  return (
   



    <>
      {/* header */}
      <header id="sec1">
        {/* nav */}
        <nav className='lg:py-[50px] lg:px-[125px] md:px-[50px] md:justify-between flex lg:justify-between items-center sm:justify-center sm:gap-[50px] sm:py-[20px]'>
          {/* left */}
          <aside className='text-[white] flex items-center gap-[16px]'>
            <div className='flex items-center gap-[8px]'>
              <img src="src/assets/header/Group 88.png" alt="" />
              <Typography>{t("t1")}</Typography>
            </div>
            <img src="src/assets/header/Vector 44.png" alt="" />
            <div className='lg:flex sm:hidden items-center gap-[8px] md:flex'>
              <img src="src/assets/header/Exclude.png" alt="" />
              <Typography>{t("t2")}</Typography>
            </div>
            <img src="src/assets/header/Vector 44.png" className="lg:block sm:hidden md:block" />
            <div className='lg:flex items-center gap-[8px] sm:hidden md:flex'>
              <img src="src/assets/header/Vector (14).png" alt="" />
              <Typography>+33 4 93 16 06 31</Typography>
            </div>
          </aside>

          {/* right */}
          <aside className='flex items-center gap-[20px]'>
            <select name="" id="" className='rounded-[10px] bg-[#73c1d0] p-[5px] text-[18px]'
              value={lng}
              onChange={(e) => {
                changeLanguage(e.target.value)
                setImg(e.target.value)
              }}
            >
              <option value="en">en</option>
              <option value="ru">ru</option>
              <option value="tj">tj</option>
            </select>
            <img src="src/assets/header/Group 41.png" alt="" />
          </aside>
        </nav>

        <section className='lg:pr-[450px] md:px-[50px] lg:pl-[125px] sm:px-[12px] flex flex-col items-start sm:gap-[10px] lg:gap-[30px] lg:pt-[236px]'>
          <div className='flex flex-col items-start'>
            <h1 className='lg:text-[71px] md:text-[71px] sm:text-[50px] text-white font-[400] tracking-[-1.42px] leading-[75px]'>{t("t3")}</h1>
            <h1 className='lg:text-[71px] md:text-[71px] sm:text-[50px] text-white font-[400] tracking-[-1.42px] leading-[75px]'>{t("t4")}</h1>
            <h1 className='lg:text-[71px] md:text-[71px] sm:text-[50px] text-white font-[400] tracking-[-1.42px] leading-[75px]'>{t("t5")}</h1>
          </div>
          <p className='lg:w-[511px] md:w-[411px] sm:text-[12px] lg:text-[15px] text-[#FFF] leading-[24px] font-serif'>{t("t6")}</p>
        </section>

        <div className='flex justify-between md:px-[50px] items-center lg:pr-[112px] lg:pl-[125px] lg:pb-[240px] lg:pt-[43px] sm:px-[12px] sm:py-[50px]'>
          <p className='text-[#fff]'>{t("t7")}<hr></hr></p>
          <Button sx={{ color: "#BE7E00", background: "#FFF9EC", borderRadius: "7px", padding: "10px", textTransform: "none" }}>{t("t8")}</Button>
        </div>
      </header>


      {/* main */}
      <main>

        {/* section 1 */}
        <section className='bg-[#151515] lg:py-[46px] lg:px-[125px] text-white sm:py-[50px] sm:px-[24px]'>
          <main className='flex justify-between items-center sm:flex-wrap sm:gap-[25px]'>
            {/* left */}
            <aside className='flex flex-col gap-[55px] items-start'>
              {/* div1 */}
              <div>
                <div className='flex items-start gap-[5px]'>
                  <h1 className='lg:text-[85px] sm:text-[50px]'>{t("t9")}</h1>
                  <p className='text-[15px]'>{t("t10")}<hr></hr></p>
                </div>
                <h2 className='font-serif md:text-[15px] sm:text-[10px]'>{t("t11")}</h2>
              </div>

              <p className='font-serif text-[15px] lg:w-[466px]'>{t("t12")}</p>

              {/* d2 */}
              <main className='lg:flex items-center sm:hidden'>

                <div className='flex flex-col items-center gap-[10px]'>
                  <h1 className='text-[90px] tracking-[-1.699px]'>7</h1>
                  <p className='text-[12px]'>{t("t13")}</p>
                </div>

                <img src="src/assets/header/Vector 3.png" alt="" />

                <div className='flex flex-col items-center gap-[10px]'>
                  <h1 className='text-[90px] tracking-[-1.699px]'>27</h1>
                  <p className='text-[12px]'>{t("t14")}</p>
                </div>

                <img src="src/assets/header/Vector 3.png" alt="" />

                <div className='flex flex-col items-center gap-[10px]'>
                  <h1 className='text-[90px] tracking-[-1.699px]'>240</h1>
                  <p className='text-[12px]'>{t("t15")}</p>
                </div>

              </main>

              <Button sx={{ color: "#fff", background: "rgba(255, 255, 255, 0.07)", borderRadius: "7px", padding: "10px", textTransform: "none" }}>{t("t16")}</Button>
            </aside>

            {/* right */}
            <aside>
              <img src="src/assets/main/section 2/olga-zabegina-KguqaFJS05I-unsplash 1.png" alt="" />
            </aside>
          </main>
        </section>
        
         {/* section 3 */}
        <section className='bg-[#151515] bg1 lg:py-[157px] lg:px-[125px] text-white sm:py-[50px] sm:px-[24px]'>
          <main className='flex justify-between items-start sm:flex-wrap sm:gap-[25px]'>
            {/* left */}
            <aside className='flex flex-col gap-[55px] items-start'>
              <h1 className='lg:text-[85px] sm:text-[50px]'>{t("t23")}</h1>
              <div className='flex items-center gap-[12px]'>
                <div className='flex items-center justify-center'>
                  <img src="src/assets/main/section 4/Group 39.png" className="relative" />
                  <img src="src/assets/main/section 3/card1/Exclude (2).png" className="absolute" />
                </div>
                <h2 className='font-serif md:text-[15px] sm:text-[10px]'>{t("t11")}</h2>
              </div>

              <p className='font-serif text-[15px] lg:w-[466px]'>{t("t12")}</p>
              <Button sx={{ color: "#fff", background: "rgba(255, 255, 255, 0.03)", borderRadius: "7px", padding: "10px", textTransform: "none" }}>{t("t24")}</Button>
            </aside>

            {/* right */}
            <aside>
              <img src="src/assets/main/section 4/olga-zabegina-KguqaFJS05I-unsplash 2.png" alt="" />
            </aside>
          </main>
        </section >


        {/* section 4 */}
        <section className='bg-[#151515] bg2 lg:px-[125px] text-white sm:py-[50px] sm:px-[24px]'>
          <main className='flex justify-between items-start sm:flex-wrap sm:gap-[50px]'>
            {/* left */}
            <aside className='flex flex-col gap-[55px] items-start lg:pt-[150px]'>
              <div>
                <div className='flex flex-col items-start'>
                  <h1 className='lg:text-[85px] sm:text-[40px] leading-[72.462px]'>{t("t251")}</h1>
                  <h1 className='lg:text-[85px] sm:text-[40px] flex items-start'>{t("t25")}  <p className='sm:text-[8px] lg:text-[15px] md:text-[15px]'>{t("t10")}<hr></hr></p></h1>
                </div>
              </div>

              <p className='font-serif text-[15px] lg:w-[364px]'>{t("t26")}</p>
            </aside>
            {/* right */}
            <aside className='lg:flex sm:hidden md:flex flex-col gap-[55px] items-start lg:pt-[500px]'>
              <div>
                <div className='flex flex-col items-start'>
                  <h1 className='lg:text-[85px] sm:text-[40px] flex items-start'>{t("t27")}  <p className='sm:text-[8px] lg:text-[15px] md:text-[15px]'>{t("t10")}<hr></hr></p></h1>
                  <h1 className='lg:text-[85px] sm:text-[40px] leading-[72.462px]'>{t("t271")}</h1>
                </div>
              </div>

              <p className='font-serif text-[15px] lg:w-[364px]'>{t("t28")}</p>
            </aside>
          </main>
        </section >


        {/* section 5 */}
        <section className='bg-[#151515] lg:py-[157px] lg:px-[115px] text-white sm:py-[50px] sm:px-[24px]'>
          <main className='flex justify-between items-start sm:flex-wrap sm:gap-[25px]'>
            {/* left */}
            <aside className='flex flex-col gap-[55px] items-start'>
              <h1 className='lg:text-[85px] sm:text-[50px]'>{t("t29")} <p className='lg:text-[85px] sm:text-[50px]'>{t("t30")}</p></h1>
            </aside>

            {/* //animation */}
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card2 h1={"100"} span={"%"} h3={t("t31")} p={t("t32")} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2 h1={"360"} span={"%"} h3={t("t31")} p={t("t32")} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2 h1={"100"} span={"%"} h3={t("t31")} p={t("t32")} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2 h1={"360"} span={"%"} h3={t("t31")} p={t("t32")} />
              </SwiperSlide>
            </Swiper>
          </main>
        </section >


        {/* section 6 */}
        <section className='jk lg:pt-[257px] lg:px-[115px] sm:p-[24px]'>
          <main className='flex flex-col items-center gap-[20px]'>
            <h1 className='lg:text-[85px] sm:text-[30px] text-white text-center'>{t("t33")}</h1>
            <div className='flex items-center justify-center gap-[21px] sm:flex-wrap'>
              <input type="text" placeholder="Введите свой email" className='px-[21px] py-[11px] rounded-[13px] border-[1px] lg:bg-[#ffffff00] lg:w-[429px] border-[rgba(255,255,255,0.50)]' />
              <input type="text" placeholder="Отправить" className='px-[21px] py-[11px] rounded-[13px] border-[1px] lg:bg-[#ffffff00] lg:w-[150px] border-[rgba(255,255,255,0.50)]' />
            </div>
            <div className='text-white lg:flex sm:hidden items-center justify-center gap-[12px]'>
              <img src="src/assets/main/section 7/Rectangle 89.png" alt="" />
              <p>{t("t34")}</p>
            </div>
          </main>
          <div className='text-white flex items-center gap-[5px] sm:pt-[50px] justify-end lg:pt-[200px] lg:pb-[40px]'>
            <h1 className='text-[20px]'>{t("t35")}</h1>
            <img src="src/assets/main/section 7/Vector 31.png" alt="" />
          </div>
        </section>
      </main >

      {/* footer */}
      <footer className='fot lg:px-[128px] lg:py-[125px] text-white sm:p-[24px]'>
        <main className='flex justify-between items-start sm:flex-wrap '>
          {/* left */}
          <aside className='flex items-center flex-col lg:gap-[226px] sm:gap-[20px]'>
            <div>
              <h1>Перезвоните мне</h1>
              <div className='py-[24px] text-[#FFFFFF80] flex flex-col gap-[28px] items-start'>
                <h1>Имя<img src="src/assets/footer/Vector 8.png" alt="" /></h1>
                <h1>Телефон<img src="src/assets/footer/Vector 8.png" alt="" /></h1>
                <h1>Email<img src="src/assets/footer/Vector 8.png" alt="" /></h1>
              </div>
            </div>
            <div className='flex flex-col ritems-start gap-[30px]'>
              <div className='flex items-center justify-between'>
                <h1 className='flex items-center gap-[15px]'><img src="src/assets/footer/Vector (15).png" />+33 4 93 16 06 31</h1>
                <div className='flex items-center gap-[5px]'>
                  <img src="src/assets/footer/Group (10).png" alt="" />
                  <img src="src/assets/footer/Subtract (1).png" alt="" />
                </div>
              </div>
              <h1 className='flex items-center gap-[15px]'><img src="src/assets/footer/Subtract.png" alt="" />contact@azur-life.com</h1>
              <h1 className='flex items-center gap-[15px]'><img src="src/assets/footer/Exclude (1).png" alt="" />Франция, бульвар Леклерк, 46, 06310, Болье-сюр-Мер</h1>
            </div>
          </aside>

          {/* right */}
          <aside>
            <div className='lg:flex sm:hidden items-start gap-[50px]'>
              <ul className='lg:flex items-start flex-col gap-[22px]'>
                <li>Навигация</li>
                <li>О нас </li>
                <li>Все объекты</li>
                <li>Продажа</li>
                <li>Аренда</li>
                <li>Купить,  продать, арендовать с нами</li>
                <li>Презентация</li>
                <li>Экспертная оценка</li>
                <li>Управление недвижимостью</li>
                <li>Наша комиссия</li>
                <li>Политика конфиденциальности</li>
              </ul>
              <ul className='text-[#BCBCBC] lg:flex items-start flex-col gap-[22px]'>
                <li>Регионы</li>
                <li>Апартаменты в Больё-сюр-Мер</li>
                <li>Вилла в Больё-сюр-Мер</li>
                <li>Вилла в Эзе</li>
                <li>Вилла в Сен-Жан-Кап-Ферра</li>
                <li>Апартаменты в Эзе</li>
                <li>Апартаменты в Сен-Жан-Кап-Ферра</li>
              </ul>
            </div>
          </aside>
        </main>
      </footer>

       

      <div className='p-[50px] flex flex-col gap-[14px] items-start'>
    <FileBase64 multiple={false} onDone={handleImg} />
     <img src={base64F} alt="" />
    <button className='bg-[green] p-[5px]' onClick={addUser}>Add</button>

      {
          todo.map((e) => {
            return (
              <div key={e.id}>
                <img src={e.file} />
               <div className='flex items-center gap-[24px] mt-[10px] text-white'>
               <button  className="bg-[#2e9dac] p-[5px]" onClick={() => {
                  setIdx(e.id)
                  setDialog(true)
                }}>Edit</button>
                <button className="bg-[red] p-[5px]" onClick={()=>delUser(e.id)}>Delete</button>
               </div>
              </div>
            )
          })
        }
      </div>

      {dialog ?
        <div className='bg-[red]'>
          <h1>Edit</h1>
          <FileBase64 multiple={false} onDone={handleImg1} />
          <img src={base64F1} alt="" />
          <div className='flex items-center gap-[10px] text-white'>
            <button onClick={() => setDialog(false)}>close</button>
            <button onClick={() => {
              setDialog(false)
              editUser(idx)
            }}>save</button>
          </div>
        </div> : null}
    </>

  )
}

export default App
