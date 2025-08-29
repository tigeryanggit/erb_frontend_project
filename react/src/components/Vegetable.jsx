import React from 'react'
import Footer from './Footer'
import Shopping from './Shopping'

function Vegetable() {
  return (

    <>
    <Shopping />
    {/* <header class="pt-24 pb-16 bg-gradient-to-br from-primary/90 to-primary text-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 text-shadow">新鲜蔬菜</h1>
                    <p class="text-[clamp(1rem,2vw,1.25rem)] opacity-90">蔬菜是均衡饮食的重要组成部分，富含维生素、矿物质、膳食纤维和抗氧化剂，对维持身体健康至关重要。每天摄入多种蔬菜有助于预防慢性疾病。</p>
                </div>
                <div class="md:w-1/2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ohE31sQlhnmu8GqzaAk3AaYwmt7LBMmTAg&s" alt="各种新鲜蔬菜" class="rounded-xl shadow-lg w-full max-w-lg mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-300"/>
                </div>
            </div>
        </div>
    </header> */}
    <div className="container-header back-vegetable">
            <h2>新鲜蔬菜</h2>
            <br />
            <p>蔬菜是均衡饮食的重要组成部分，富含维生素、矿物质、膳食纤维和抗氧化剂，对维持身体健康至关重要。每天摄入多种蔬菜有助于预防慢性疾病。</p>
    </div>

    <main class="py-16">
        <div class="container mx-auto px-4">

            {/* <section class="mb-16 bg-white rounded-2xl shadow-md p-6 md:p-8">
                <h2 class="text-2xl font-bold mb-6 text-center">蔬菜营养成分对比 (每100克)</h2>
                <div class="h-80">
                    <canvas id="vegetableChart"></canvas>
                </div>
            </section> */}
            

            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center mb-12 text-dark">常见健康蔬菜</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="菠菜" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-leaf text-secondary text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">菠菜</h3>
                        </div>
                        <p class="text-gray-600 mb-4">菠菜是一种营养丰富的绿叶蔬菜，原产于波斯，现广泛种植于世界各地。叶片柔软，味道清甜，适合快炒、煮汤或作为沙拉生食，是非常百搭的蔬菜。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>铁: 2.7毫克 (15% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素K: 483微克 (403% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素A: 469微克 (52% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含钙、镁和叶酸</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 改善视力，增强骨骼健康，促进红细胞生成，富含抗氧化剂。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1751560049001-4d0cc7ff407d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="芥兰" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-leaf text-secondary text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">芥兰</h3>
                        </div>
                        <p class="text-gray-600 mb-4">芥兰是中国南方常见的蔬菜，属于十字花科。茎粗壮直立，叶片绿色有光泽，味道微苦带甜，纤维丰富，适合快炒或蒜蓉清炒，是粤菜中的经典食材。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素C: 76毫克 (84% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素K: 42微克 (35% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 3.4克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含钾、钙和维生素A</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 促进消化，增强免疫力，含有抗癌化合物，有助于降低胆固醇。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://media.istockphoto.com/id/172260910/zh/%E7%85%A7%E7%89%87/chinese-broccoli-gai-lan-isolated.jpg?s=1024x1024&w=is&k=20&c=oOj9qG7bbVy0o6zCAgIlOFFXnywljen7QZE0Qfncx58=" alt="菜心" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-leaf text-secondary text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">菜心</h3>
                        </div>
                        <p class="text-gray-600 mb-4">菜心又称菜薹，是中国南方的特色蔬菜，口感脆嫩清甜。茎部肥嫩，顶部开有小黄花，是广东、广西等地餐桌上的常见食材，适合快炒或白灼。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素C: 66毫克 (73% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素A: 305微克 (34% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 2.8克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含钾、钙和铁</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 增强免疫力，促进肠道蠕动，低热量高纤维，适合减肥期间食用。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="西兰花" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-leaf text-secondary text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">西兰花</h3>
                        </div>
                        <p class="text-gray-600 mb-4">西兰花是十字花科蔬菜的一种，原产于地中海地区。它以紧密的绿色花球和粗壮的茎为特征，质地脆嫩，味道清淡微苦，适合多种烹饪方式。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素C: 89毫克 (99% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素K: 101微克 (84% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>膳食纤维: 2.6克</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含叶酸、钾和抗氧化物质</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 增强免疫系统，促进心血管健康，含有抗癌特性的植物化合物。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1693667660375-653320dbebb4?q=80&w=536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="生菜" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-leaf text-secondary text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">生菜</h3>
                        </div>
                        <p class="text-gray-600 mb-4">生菜是一种常见的叶用蔬菜，品种繁多，包括西生菜、罗马生菜、油麦菜等。叶片脆嫩多汁，味道清爽，是沙拉的主要原料，也可用于火锅或 sandwiches。</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素K: 126微克 (105% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素A: 436微克 (48% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>维生素C: 8.8毫克 (10% 每日需求量)</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>富含水分、钾和膳食纤维</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 低热量高水分，有助于体重管理，促进骨骼健康，富含抗氧化物质。</p>
                        </div>
                    </div>
                </div>
                

                <div class="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 flex flex-col justify-center">
                    <h3 class="text-xl font-bold text-dark mb-4 text-center">蔬菜搭配建议</h3>
                    <p class="text-gray-600 mb-4">合理搭配不同蔬菜，可最大化吸收营养并提升口感：</p>
                    <ul class="space-y-3 text-gray-700 mb-6">
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-primary mt-1 mr-2"></i>
                            <span>快炒芥兰搭配蒜蓉，提升风味同时促进营养吸收</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-primary mt-1 mr-2"></i>
                            <span>生菜与煮熟的菠菜混合制作沙拉，生熟搭配营养均衡</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-primary mt-1 mr-2"></i>
                            <span>西兰花与胡萝卜同炒，提供丰富抗氧化物质</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-arrow-right text-primary mt-1 mr-2"></i>
                            <span>菜心白灼后淋上生抽，保留最大营养价值</span>
                        </li>
                    </ul>
                    <div class="bg-white p-4 rounded-lg shadow-sm">
                        <p class="text-sm text-gray-700"><i class="fa fa-info-circle text-accent mr-2"></i>建议成年人每天摄入300-500克蔬菜，最好包含多种颜色和种类。</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />


</>


  )
}

export default Vegetable