import React from 'react'
import Footer from './Footer';


function Index() {
  return (

    <>
    <header class="pt-24 pb-16 bg-gradient-to-br from-primary/90 to-primary text-white">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 text-shadow">健康食品指南</h1>
            <p class="text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto opacity-90">探索各种营养丰富的植物性食物，了解它们的健康益处和营养成分，为您的健康饮食提供参考</p>
        </div>
    </header>


    <main class="py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center mb-12 text-dark">探索健康食物分类</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                <a href="vegetarian-protein.html" class="block">
                    <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                        <div class="h-48 overflow-hidden">
                            <img src="https://picsum.photos/id/139/600/400" alt="素食蛋白食物展示" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center mb-3">
                                <i class="fa fa-drumstick-bite text-secondary text-xl mr-2"></i>
                                <h3 class="text-xl font-bold text-dark">素食蛋白</h3>
                            </div>
                            <p class="text-gray-600 mb-4">探索丰富的植物性蛋白质来源，满足您的营养需求，同时保护环境。</p>
                            <div class="inline-flex items-center text-primary font-medium">
                                了解更多 <i class="fa fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                            </div>
                        </div>
                    </div>
                </a>
                

                <a href="fruits.html" class="block">
                    <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                        <div class="h-48 overflow-hidden">
                            <img src="https://picsum.photos/id/1080/600/400" alt="各种水果展示" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center mb-3">
                                <i class="fa fa-apple-alt text-secondary text-xl mr-2"></i>
                                <h3 class="text-xl font-bold text-dark">水果</h3>
                            </div>
                            <p class="text-gray-600 mb-4">发现各种水果的独特营养成分和健康益处，为您的日常饮食增添色彩。</p>
                            <div class="inline-flex items-center text-primary font-medium">
                                了解更多 <i class="fa fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                            </div>
                        </div>
                    </div>
                </a>
                

                <a href="grains.html" class="block">
                    <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                        <div class="h-48 overflow-hidden">
                            <img src="https://picsum.photos/id/292/600/400" alt="各种五谷展示" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center mb-3">
                                <i class="fa fa-seedling text-secondary text-xl mr-2"></i>
                                <h3 class="text-xl font-bold text-dark">五谷</h3>
                            </div>
                            <p class="text-gray-600 mb-4">探索各种全谷物的营养价值，它们是膳食纤维和复合碳水化合物的重要来源。</p>
                            <div class="inline-flex items-center text-primary font-medium">
                                了解更多 <i class="fa fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                            </div>
                        </div>
                    </div>
                </a>
                

                <a href="vegetables.html" class="block">
                    <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                        <div class="h-48 overflow-hidden">
                            <img src="https://picsum.photos/id/123/600/400" alt="各种蔬菜展示" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center mb-3">
                                <i class="fa fa-carrot text-secondary text-xl mr-2"></i>
                                <h3 class="text-xl font-bold text-dark">蔬菜</h3>
                            </div>
                            <p class="text-gray-600 mb-4">了解各种蔬菜的健康价值，它们富含维生素、矿物质和抗氧化剂。</p>
                            <div class="inline-flex items-center text-primary font-medium">
                                了解更多 <i class="fa fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            

            <section class="mt-20 bg-neutral rounded-2xl p-8 md:p-12 shadow-inner">
                <h3 class="text-2xl font-bold mb-6 text-center text-dark">健康饮食小贴士</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <i class="fa fa-balance-scale text-primary text-xl"></i>
                        </div>
                        <h4 class="font-bold text-lg mb-2">均衡饮食</h4>
                        <p class="text-gray-600">确保饮食中包含足够的蛋白质、碳水化合物、健康脂肪、维生素和矿物质，保持营养均衡。</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <i class="fa fa-tint text-primary text-xl"></i>
                        </div>
                        <h4 class="font-bold text-lg mb-2">充足水分</h4>
                        <p class="text-gray-600">每天饮用足够的水，保持身体水分平衡，有助于消化和新陈代谢。</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <i class="fa fa-clock-o text-primary text-xl"></i>
                        </div>
                        <h4 class="font-bold text-lg mb-2">规律饮食</h4>
                        <p class="text-gray-600">保持规律的饮食习惯，避免暴饮暴食，有助于维持稳定的能量水平和新陈代谢。</p>
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