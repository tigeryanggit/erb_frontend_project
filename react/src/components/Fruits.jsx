import React from 'react'
import Footer from './Footer';
import Shopping from './Shopping';
import Fruit from './Fruit';
import { fruitcard } from '../data';

function Fruits() {
  return (

    <>
    <Shopping />
    {/* <header class="pt-24 pb-16 bg-gradient-to-br from-primary/90 to-primary text-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 text-shadow">水果</h1>
                    <p class="text-[clamp(1rem,2vw,1.25rem)] opacity-90">水果是维生素、矿物质和抗氧化剂的天然来源，富含膳食纤维，有助于维持身体健康。每天食用多种水果可以提供丰富的营养，促进整体健康。</p>
                </div>
                <div class="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="各种新鲜水果" class="rounded-xl shadow-lg w-full max-w-lg mx-auto transform -rotate-2 hover:rotate-0 transition-transform duration-300"/>
                </div>
            </div>
        </div>
    </header> */}
    <div className="container-header back-fruits">
            <h2>水果</h2>
            <br />
            <p>水果是维生素、矿物质和抗氧化剂的天然来源，富含膳食纤维，有助于维持身体健康。每天食用多种水果可以提供丰富的营养，促进整体健康。</p>
    </div>

    <main class="py-16">
        <div class="container mx-auto px-4">

            {/* <section class="mb-16 bg-white rounded-2xl shadow-md p-6 md:p-8">
                <h2 class="text-2xl font-bold mb-6 text-center">水果维生素C含量对比 (每100克)</h2>
                <div class="h-80">
                    <canvas id="fruitChart"></canvas>
                </div>
            </section> */}
            

            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center mb-12 text-dark">营养丰富的水果</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* {image, title, text, text1, text2, text3, text4, text5} */}
                {
                    fruitcard.map((fruit) => (
                        <Fruit 
                            key={fruit.id}
                            image={fruit.image}
                            title={fruit.title}
                            text={fruit.text}
                            text1={fruit.text1}
                            text2={fruit.text2}
                            text3={fruit.text3}
                            text4={fruit.text4}
                            text5={fruit.text5}
                            
                        />


                    )



                    )
                }


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
    <Footer /> 
    
    </>


  )
}

export default Fruits