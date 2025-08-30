import React from 'react'

function IndexCard({image, title, text, alt}) {
  return (
                    <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                        <div class="h-48 overflow-hidden">
                            <img src={image} alt={alt} class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center mb-3">
                                <i class="fa fa-drumstick-bite text-secondary text-xl mr-2"></i>
                                <h3 class="text-xl font-bold text-dark">{title}</h3>
                            </div>
                            <p class="text-gray-600 mb-4">{text}</p>
                            <div class="inline-flex items-center text-primary font-medium">
                              
                            </div>
                        </div>
                    </div>
  )
}

export default IndexCard