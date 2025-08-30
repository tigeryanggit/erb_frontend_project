import React from 'react'
import Footer from './Footer';
import Shopping from './Shopping';

function Vegetables() {
  return (
    <>
    <Shopping /> 
        {/* <header className="pt-24 pb-16 bg-gradient-to-br from-primary/90 to-primary text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 text-shadow">素類介紹</h1>
                        <p className="text-[clamp(1rem,2vw,1.25rem)] opacity-90">素食食材富含植物蛋白、纖維與礦物質，提供能量同時促進健康，是均衡飲食的重要一環。</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="" alt="各种素食蛋白食品" class="rounded-xl shadow-lg w-full max-w-lg mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-300" alt="各种素食蛋白食品" class="rounded-xl shadow-lg w-full max-w-lg mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-300"/>
                    </div>
                </div>
            </div>
        </header> */}
        <div className="container-header back-vegetables">
                <h2>素類介紹</h2>
                <br />
                <p>素食食材富含植物蛋白、纖維與礦物質，提供能量同時促進健康，是均衡飲食的重要一環。</p>

        </div>


        <main className="py-16">
            <div className="container mx-auto px-4">

                {/* <section class="mb-16 bg-white rounded-2xl shadow-md p-6 md:p-8">
                    <h2 class="text-2xl font-bold mb-6 text-center">素食蛋白营养成分对比 (每100克)</h2>
                    <div class="h-80">
                        <canvas id="proteinChart"></canvas>
                    </div>
                </section> */}
                

                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center mb-12 text-dark">常见素食蛋白来源</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                        <div className="h-56 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1722635940350-d1b2e5129379?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="豆腐" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <i className="fa fa-drumstick-bite text-secondary text-xl mr-2"></i>
                                <h3 className="text-xl font-bold text-dark">豆腐</h3>
                            </div>
                            <p className="text-gray-600 mb-4">豆腐是大豆制成的传统食品，质地柔软，味道温和，易于吸收其他食材的风味。它是亚洲饮食中重要的蛋白质来源。</p>
                            
                            <h4 className="font-bold text-lg mb-2 text-primary">营养成分</h4>
                            <ul className="space-y-1 text-gray-600 mb-4">
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>蛋白质: 8克</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>脂肪: 4克 (主要为不饱和脂肪)</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>碳水化合物: 2克</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>富含钙、铁、镁和维生素B</li>
                            </ul>
                            
                            <div className="bg-neutral p-3 rounded-lg">
                                <p className="text-sm text-gray-700"><i className="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 有助于降低胆固醇，富含植物雌激素，对骨骼健康有益。</p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                        <div className="h-56 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1586201375799-47cd24c3f595?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="藜麦" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <i className="fa fa-drumstick-bite text-secondary text-xl mr-2"></i>
                                <h3 className="text-xl font-bold text-dark">藜麦</h3>
                            </div>
                            <p className="text-gray-600 mb-4">藜麦是一种伪谷物，原产于南美洲安第斯山脉。它是唯一含有全部九种必需氨基酸的植物性食物，被视为完全蛋白质。</p>
                            
                            <h4 className="font-bold text-lg mb-2 text-primary">营养成分</h4>
                            <ul className="space-y-1 text-gray-600 mb-4">
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>蛋白质: 14克</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>脂肪: 6克 (富含omega-3脂肪酸)</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>碳水化合物: 64克 (其中17克为膳食纤维)</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>富含铁、镁、锌和维生素E</li>
                            </ul>
                            
                            <div className="bg-neutral p-3 rounded-lg">
                                <p className="text-sm text-gray-700"><i className="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 有助于控制血糖，提供持久能量，适合麸质不耐受人群。</p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                        <div class="h-56 overflow-hidden">
                            <img src="https://plus.unsplash.com/premium_photo-1675237624857-7d995e29897d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="鹰嘴豆" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <i className="fa fa-drumstick-bite text-secondary text-xl mr-2"></i>
                                <h3 className="text-xl font-bold text-dark">鹰嘴豆</h3>
                            </div>
                            <p className="text-gray-600 mb-4">鹰嘴豆是一种营养丰富的豆类，在中东和印度菜肴中广泛使用。它们具有坚果般的味道和坚实的质地。</p>
                            
                            <h4 className="font-bold text-lg mb-2 text-primary">营养成分</h4>
                            <ul className="space-y-1 text-gray-600 mb-4">
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>蛋白质: 8克</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>脂肪: 2克</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>碳水化合物: 20克 (其中6克为膳食纤维)</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>富含叶酸、铁、镁和钾</li>
                            </ul>
                            
                            <div className="bg-neutral p-3 rounded-lg">
                                <p className="text-sm text-gray-700"><i className="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 有助于降低心脏病风险，促进消化系统健康，提供持久饱腹感。</p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                        <div className="h-56 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1728931339590-c3bba05a7d01?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="扁豆" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <i className="fa fa-drumstick-bite text-secondary text-xl mr-2"></i>
                                <h3 className="text-xl font-bold text-dark">扁豆</h3>
                            </div>
                            <p className="text-gray-600 mb-4">扁豆是豆科植物的种子，有多种颜色，包括绿色、棕色、红色和黄色。它们易于烹饪，是全球许多饮食中的主食。</p>
                            
                            <h4 className="font-bold text-lg mb-2 text-primary">营养成分</h4>
                            <ul className="space-y-1 text-gray-600 mb-4">
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>蛋白质: 9克</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>脂肪: 0.4克</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>碳水化合物: 20克 (其中8克为膳食纤维)</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>富含叶酸、铁、钾和锰</li>
                            </ul>
                            
                            <div className="bg-neutral p-3 rounded-lg">
                                <p className="text-sm text-gray-700"><i className="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 有助于控制血糖，降低胆固醇，支持心血管健康。</p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                        <div class="h-56 overflow-hidden">
                            <img src="https://plus.unsplash.com/premium_photo-1671130295917-be0cde58cf23?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="奇亚籽" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <i className="fa fa-drumstick-bite text-secondary text-xl mr-2"></i>
                                <h3 className="text-xl font-bold text-dark">奇亚籽</h3>
                            </div>
                            <p className="text-gray-600 mb-4">奇亚籽是鼠尾草植物的种子，起源于中美洲。它们遇水后会膨胀形成凝胶状物质，常用于制作布丁和冰沙。</p>
                            
                            <h4 className="font-bold text-lg mb-2 text-primary">营养成分</h4>
                            <ul className="space-y-1 text-gray-600 mb-4">
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>蛋白质: 17克</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>脂肪: 30克 (主要为omega-3脂肪酸)</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>碳水化合物: 42克 (其中34克为膳食纤维)</li>
                                <li><i className="fa fa-check-circle text-primary mr-2"></i>富含钙、镁、磷和抗氧化剂</li>
                            </ul>
                            
                            <div className="bg-neutral p-3 rounded-lg">
                                <p className="text-sm text-gray-700"><i className="fa fa-lightbulb-o text-secondary mr-2"></i>健康益处: 有助于体重管理，支持心脏健康，促进消化和血糖控制。</p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-dark mb-4 text-center">素食蛋白搭配建议</h3>
                        <p className="text-gray-600 mb-4">将不同的植物蛋白组合食用，可以确保获得所有必需氨基酸：</p>
                        <ul className="space-y-3 text-gray-700 mb-6">
                            <li className="flex items-start">
                                <i className="fa fa-arrow-right text-primary mt-1 mr-2"></i>
                                <span>谷物(如米饭) + 豆类(如扁豆) = 完整蛋白质组合</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa fa-arrow-right text-primary mt-1 mr-2"></i>
                                <span>全麦面包 + 花生酱 = 美味的蛋白质组合</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa fa-arrow-right text-primary mt-1 mr-2"></i>
                                <span>豆腐 + 藜麦 = 高蛋白素食主餐</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa fa-arrow-right text-primary mt-1 mr-2"></i>
                                <span>鹰嘴豆 + 芝麻 = 中东风味的蛋白质组合</span>
                            </li>
                        </ul>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-700"><i className="fa fa-info-circle text-accent mr-2"></i>成年人每天建议摄入的蛋白质约为每公斤体重0.8-1克，运动员和活跃人群可能需要更多。</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    <Footer />   
    </>
  )
}

export default Vegetables