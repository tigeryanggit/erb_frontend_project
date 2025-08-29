import React from 'react'
import Footer from './Footer';
import Shopping from './Shopping';

function Grains() {
  return (
    
    <>
    <Shopping />
    {/* <header class="pt-24 pb-16 bg-gradient-to-br from-primary/90 to-primary text-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 text-shadow">五谷</h1>
                    <p class="text-[clamp(1rem,2vw,1.25rem)] opacity-90">五谷是指五种谷物，是人类饮食的基础，提供能量和多种重要营养素。全谷物保留了麸皮、胚芽和胚乳，比精制谷物含有更多的纤维、维生素和矿物质。</p>
                </div>
                <div class="md:w-1/2">
                    <img src="https://p6.itc.cn/q_70/images01/20211224/a58d004fee0243de9ff0381a201b34cb.jpeg" alt="各种五谷杂粮" class="rounded-xl shadow-lg w-full max-w-lg mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-300"/>
                </div>
            </div>
        </div>
    </header> */}
    <div className="container-header back-fruits">
            <h2>五谷</h2>
            <br />
            <p>五谷是指五种谷物，是人类饮食的基础，提供能量和多种重要营养素。全谷物保留了麸皮、胚芽和胚乳，比精制谷物含有更多的纤维、维生素和矿物质。</p>
    </div>


    <main class="py-16">
        <div class="container mx-auto px-4">

            {/* <section class="mb-16 bg-white rounded-2xl shadow-md p-6 md:p-8">
                <h2 class="text-2xl font-bold mb-6 text-center">五谷膳食纤维含量对比 (每100克熟重)</h2>
                <div class="h-80">
                    <canvas id="grainChart"></canvas>
                </div>
            </section> */}
            

            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center mb-12 text-dark">营养丰富的五谷</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1614373532018-92a75430a0da?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="燕麦" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-seedling text-amber-700 text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">燕麦</h3>
                        </div>
                        <p class="text-gray-600 mb-4">燕麦是一种营养丰富的全谷物，以其独特的可溶性纤维含量而闻名。它们可以制成燕麦片、燕麦粥，也可添加到烘焙食品中。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分 (熟)</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 4克 (其中1.9克为可溶性纤维)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>蛋白质: 5克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>卡路里: 150</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含锰、镁、磷和维生素B群</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 降低LDL("坏")胆固醇，有助于控制血糖，提供持久能量，促进饱腹感。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1613728913341-8f29b02b8253?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="糙米" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-seedling text-amber-700 text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">糙米</h3>
                        </div>
                        <p class="text-gray-600 mb-4">糙米是去除外壳但保留麸皮和胚芽的稻米，比白米更有营养。它具有坚果般的口感和淡淡的坚果香味。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分 (熟)</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 2.8克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>蛋白质: 2.6克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>卡路里: 111</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含锰、镁、硒和B族维生素</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 支持心脏健康，有助于体重管理，促进消化健康，提供持久能量。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://plus.unsplash.com/premium_photo-1671130295828-efd9019faee0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="藜麦" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-seedling text-amber-700 text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">藜麦</h3>
                        </div>
                        <p class="text-gray-600 mb-4">藜麦虽然常被当作谷物，但实际上是一种伪谷物。它是唯一含有全部九种必需氨基酸的植物性食物，是优质蛋白质的重要来源。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分 (熟)</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 2.8克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>蛋白质: 4.4克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>卡路里: 120</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含铁、镁、锌和维生素E</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 适合麸质不耐受人群，支持肌肉生长，有助于控制血糖，促进心脏健康。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://media.istockphoto.com/id/1445727438/zh/%E7%85%A7%E7%89%87/millet-and-wood-spoon.jpg?s=1024x1024&w=is&k=20&c=5LMUvYFKd9OvoTDOJKOdWIt5pHCO6GHEUPrL09aE1EY=" alt="小米" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-seedling text-amber-700 text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">小米</h3>
                        </div>
                        <p class="text-gray-600 mb-4">小米是世界上最古老的栽培谷物之一，在中国、印度和非洲有着悠久的种植历史。它口感轻盈，易于消化，适合各类人群食用。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分 (熟)</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 2.2克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>蛋白质: 4.8克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>卡路里: 114</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含镁、磷、 manganese和B族维生素</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 易于消化，适合肠胃敏感人群，有助于维持健康血糖水平，支持神经系统功能。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1613758235306-69cc0a3f614d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="荞麦" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-seedling text-amber-700 text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">荞麦</h3>
                        </div>
                        <p class="text-gray-600 mb-4">荞麦虽然名称中有"麦"字，但实际上是蓼科植物的种子，不是真正的谷物。它不含麸质，是 gluten不耐受人群的理想选择。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分 (熟)</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 2.7克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>蛋白质: 3.6克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>卡路里: 110</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含镁、铜、锰和B族维生素</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 改善血液循环，降低胆固醇，支持心脏健康，有助于控制血糖水平。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-gradient-to-br from-amber-700/10 to-amber-800/5 rounded-xl p-6 flex flex-col justify-center">
                    <h3 class="text-xl font-bold text-dark mb-4 text-center">五谷食用建议</h3>
                    <p class="text-gray-600 mb-4">如何将五谷更好地融入日常饮食：</p>
                    <ul class="space-y-3 text-gray-700 mb-6">
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-amber-700 mt-1 mr-2"></i>
                            <span>选择全谷物而非精制谷物，以获取更多纤维和营养</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-amber-700 mt-1 mr-2"></i>
                            <span>尝试将不同谷物混合烹饪，如糙米与藜麦混合，增加口感和营养</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-amber-700 mt-1 mr-2"></i>
                            <span>早餐可以用燕麦或小米煮粥，搭配水果增加风味和营养</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-amber-700 mt-1 mr-2"></i>
                            <span>储存五谷时应密封并放在阴凉干燥处，防止虫蛀和变质</span>
                        </li>
                    </ul>
                    <div class="bg-white p-4 rounded-lg shadow-sm">
                        <p class="text-sm text-gray-700"><i class="fa fa-info-circle text-accent mr-2"></i>建议成年人每天摄入6-8份谷物，其中至少一半应为全谷物。一份约等于半杯 cooked grains 或一片面包。</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
    
    
    </>


  )
}

export default Grains