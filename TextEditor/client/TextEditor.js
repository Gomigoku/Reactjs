import { useCallback } from 'react';
import React from 'react';
import Quill from "quill"
import "quill/dist/quill.snow.css"

export default function TextEditor() {
    
    // const wrapperRef = useRef();

    const wrapperRef = useCallback((wrapper) => {
        if(wrapper == null) return
        wrapperRef.innerHTML = " ";
        const editor = document.createElement('div');
        wrapper.append(editor);
        new Quill(editor, {theme:"snow"})
    },[])

    return(
       <div id="container" ref={wrapperRef}></div>
    )
}
