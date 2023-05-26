import { card, quotes } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

export const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Encuentra una oferta<br className='sm:block hidden'/> en unos pocos pasos.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Esta tarjeta está hecha para ti porque pensamos en ti y en todas las cosas que puedes hacer con esta tarjeta en tu bolsillo.</p>

      <Button styles="mt-10" text="Comienza ahora!"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[100%]'></img>
    </div>  
  </section>
)

export const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);