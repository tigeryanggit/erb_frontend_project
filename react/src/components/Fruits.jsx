import React from 'react'

function Fruits() {
  return (

    <>
    
        <header class="pt-24 pb-16 bg-gradient-to-br from-secondary/90 to-secondary text-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 text-shadow">水果</h1>
                    <p class="text-[clamp(1rem,2vw,1.25rem)] opacity-90">水果是维生素、矿物质和抗氧化剂的天然来源，富含膳食纤维，有助于维持身体健康。每天食用多种水果可以提供丰富的营养，促进整体健康。</p>
                </div>
                <div class="md:w-1/2">
                    <img src="https://picsum.photos/id/1080/800/500" alt="各种新鲜水果" class="rounded-xl shadow-lg w-full max-w-lg mx-auto transform -rotate-2 hover:rotate-0 transition-transform duration-300"/>
                </div>
            </div>
        </div>
    </header>


    <main class="py-16">
        <div class="container mx-auto px-4">

            <section class="mb-16 bg-white rounded-2xl shadow-md p-6 md:p-8">
                <h2 class="text-2xl font-bold mb-6 text-center">水果维生素C含量对比 (每100克)</h2>
                <div class="h-80">
                    <canvas id="fruitChart"></canvas>
                </div>
            </section>
            

            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center mb-12 text-dark">营养丰富的水果</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1594002348772-bc0cb57ade8b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="蓝莓" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-apple-alt text-secondary text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">蓝莓</h3>
                        </div>
                        <p class="text-gray-600 mb-4">蓝莓是一种小型浆果，呈深蓝色，味道酸甜可口。它们被认为是"超级食物"之一，因为其极高的抗氧化剂含量。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素C: 9.7毫克 (11% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 2.4克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>卡路里: 57</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含花青素和其他抗氧化剂</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 改善心脏健康，增强记忆力，减少炎症，保护眼睛健康。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="香蕉" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-apple-alt text-secondary text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">香蕉</h3>
                        </div>
                        <p class="text-gray-600 mb-4">香蕉是世界上最受欢迎的水果之一，富含能量，易于携带，是运动前后的理想零食。它们的成熟度不同，味道和质地也有所不同。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>钾: 358毫克 (7% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素B6: 0.4毫克 (22% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 2.6克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>卡路里: 89</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 维持正常血压，提供快速能量，支持消化系统健康，有助于肌肉功能。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://plus.unsplash.com/premium_photo-1667049292983-d2524dd0ef08?q=80&w=1698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="苹果" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-apple-alt text-secondary text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">苹果</h3>
                        </div>
                        <p class="text-gray-600 mb-4">苹果是最广泛种植的水果之一，有许多品种，从甜到酸不等。"一天一苹果，医生远离我"这句谚语反映了它的健康价值。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素C: 4.6毫克 (5% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 2.4克 (主要在果皮中)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>卡路里: 52</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含抗氧化剂和植物化合物</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 降低心脏病风险，帮助体重管理，支持肠道健康，具有抗炎特性。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="橙子" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-apple-alt text-secondary text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">橙子</h3>
                        </div>
                        <p class="text-gray-600 mb-4">橙子是柑橘类水果的代表，以其甜美多汁的果肉和丰富的维生素C而闻名。它们通常在冬季成熟，是寒冷季节的营养佳品。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素C: 53.2毫克 (59% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 2.4克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>卡路里: 47</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含类黄酮和抗氧化剂</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 增强免疫系统，促进胶原蛋白生成，改善铁吸收，支持心脏健康。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1587393855524-087f83d95bc9?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="草莓" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-apple-alt text-secondary text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">草莓</h3>
                        </div>
                        <p class="text-gray-600 mb-4">草莓是一种受欢迎的浆果，具有鲜艳的红色、独特的心形和甜美的味道。它们实际上不是浆果，而是聚合果，每个"种子"都是一个单独的果实。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素C: 58.8毫克 (65% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 2克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>卡路里: 32</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含锰和抗氧化剂</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 减少炎症，改善心脏健康，有助于血糖管理，促进皮肤健康。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 flex flex-col justify-center">
                    <h3 class="text-xl font-bold text-dark mb-4 text-center">水果食用建议</h3>
                    <p class="text-gray-600 mb-4">如何最大化水果的营养价值：</p>
                    <ul class="space-y-3 text-gray-700 mb-6">
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-secondary mt-1 mr-2"></i>
                            <span>尽量选择当季水果，它们更新鲜，营养更丰富，价格也更实惠</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-secondary mt-1 mr-2"></i>
                            <span>大多数水果最好连皮吃，因为果皮中含有大量纤维和抗氧化剂</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-secondary mt-1 mr-2"></i>
                            <span>每天食用2-3份不同种类的水果，以获得多样化的营养</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-secondary mt-1 mr-2"></i>
                            <span>整果比果汁更健康，因为保留了所有的纤维和营养</span>
                        </li>
                    </ul>
                    <div class="bg-white p-4 rounded-lg shadow-sm">
                        <p class="text-sm text-gray-700"><i class="fa fa-info-circle text-accent mr-2"></i>一份水果大约相当于一个中等大小的水果（如苹果或橙子），或半杯切碎的水果。</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

   
    
    </>


  )
}

export default Fruits