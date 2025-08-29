import React from 'react'

function Fruit({image, title, text, text1, text2, text3, text4, text5}) {
  return (


                    <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="h-56 overflow-hidden">
                        <img src={image}/>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-3">
                            <i class="fa fa-apple-alt text-secondary text-xl mr-2"></i>
                            <h3 class="text-xl font-bold text-dark">{title}</h3>
                        </div>
                        <p class="text-gray-600 mb-4">{text}</p>
                        
                        <h4 class="font-bold text-lg mb-2 text-primary">营养成分</h4>
                        <ul class="space-y-1 text-gray-600 mb-4">
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>{text1}</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>{text2}</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>{text3}</li>
                            <li><i class="fa fa-check-circle text-primary mr-2"></i>{text4}</li>
                        </ul>
                        
                        <div class="bg-neutral p-3 rounded-lg">
                            <p class="text-sm text-gray-700"><i class="fa fa-lightbulb-o text-secondary mr-2"></i>{text5}</p>
                        </div>
                    </div>
                </div>

  )
}

export default Fruit