import React from 'react'
import Footer from './Footer';
import IndexCard from './IndexCard';
import { IndexIntro } from '../data';
import Shopping from './Shopping';

function Index() {
  return (

    <>
    <Shopping />
    {/* <header className="pt-24 pb-16 bg-gradient-to-br from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 text-shadow">買菜</h1>
            <p className="text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto opacity-90">從最基本的層面看，食物是維持生命的必需品。人體如精巧的熔爐，須不斷添柴加火，方能持續運轉。五穀雜糧，蔬果肉禽，經烹煮調製，化為滋養軀體的養分。沒有食物的供給，再強健的體魄也會日漸枯萎。</p>
            <p className="text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto opacity-90">但食物從何來呢？一日三餐的餸菜從何來呢？本網站會為大家提供相關的資訊，由何處買菜,認識相關食物的知識及烹調的方法,我們也會為你一一介紹。 </p>
        </div>
    </header> */}
        <div className="container-header back-index">
                <h2>買菜</h2>
                <br />
                <p>從最基本的層面看，食物是維持生命的必需品。人體如精巧的熔爐，須不斷添柴加火，方能持續運轉。五穀雜糧，蔬果肉禽，經烹煮調製，化為滋養軀體的養分。沒有食物的供給，再強健的體魄也會日漸枯萎。</p>
                <p>但食物從何來呢？一日三餐的餸菜從何來呢？本網站會為大家提供相關的資訊，由何處買菜,認識相關食物的知識及烹調的方法,我們也會為你一一介紹。</p>
        </div>



    <main className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center mb-12 text-dark">食物分類</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        IndexIntro.map((index)=>(
                            <IndexCard key={index.id} image={index.image} title={index.title} text={index.text} alt={index.title} />
                        )
                        )
                    }
                
            </div>
            

            <section className="mt-20 bg-neutral rounded-2xl p-8 md:p-12 shadow-inner">
                <h3 className="text-2xl font-bold mb-6 text-center text-dark">健康饮食小贴士</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">



                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <i className="fa fa-balance-scale text-primary text-xl"></i>
                        </div>
                        <h4 className="font-bold text-lg mb-2">均衡饮食</h4>
                        <p className="text-gray-600">确保饮食中包含足够的蛋白质、碳水化合物、健康脂肪、维生素和矿物质，保持营养均衡。</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <i className="fa fa-tint text-primary text-xl"></i>
                        </div>
                        <h4 className="font-bold text-lg mb-2">充足水分</h4>
                        <p className="text-gray-600">每天饮用足够的水，保持身体水分平衡，有助于消化和新陈代谢。</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <i className="fa fa-clock-o text-primary text-xl"></i>
                        </div>
                        <h4 className="font-bold text-lg mb-2">规律饮食</h4>
                        <p className="text-gray-600">保持规律的饮食习惯，避免暴饮暴食，有助于维持稳定的能量水平和新陈代谢。</p>
                    </div>


                </div>
            </section>
        </div>
    </main>
    <Footer />

    {/* <script>
        // 导航栏滚动效果
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('py-2', 'shadow-lg');
                navbar.classList.remove('py-3', 'shadow-md');
            } else {
                navbar.classList.add('py-3', 'shadow-md');
                navbar.classList.remove('py-2', 'shadow-lg');
            }
        }); */}
        
{/* 
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        }); */}
        


    </>
  )
}

export default Index