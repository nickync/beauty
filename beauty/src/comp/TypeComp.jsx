import { TypeAnimation } from 'react-type-animation';

export default function TypeComp() {
  return (
    <TypeAnimation
        sequence={['一家集美容、 按摩为一体的专业机构，我们以舒适优雅的环境和细致周到的服务为前題',
        1000,
        '，并结合中医理疗技术，以中医经络理论为基础來为每位顾客服务。',
        2000]}
        wrapper='strong'
        speed={50}
        style={{fontSize: '2em', display: 'inline-block'}}
        repeat={Infinity}
        cursor={true}
        className='text-white'
    >
    </TypeAnimation>
  )
}