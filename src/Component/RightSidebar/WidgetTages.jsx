import React from 'react'

const WidgetTages = () => {
    const tags = ['c', 'css', 'JavaScript','Java','Ruby','SQL','Swift','TypeScript','Kotlin','Scala', 'Rust','AngularJS','Dart','React','Objective-C','Golang','C++','Ruby']
  return (
    <div>
        <div className='widget-tags'>
            <h4>Watched tags</h4>
            <div className='widget-tags-div'>
                {
                    tags.map((tag)=>(
                        <p key={tag}>{tag}</p>
                    )
                    )
                }
            </div>
        </div>

    </div>
  )
}

export default WidgetTages