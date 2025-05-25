"use client"

interface Props{
  onclose:()=>void;
}

export default function CloseBtn({onclose}:Props){
    return(
        <button
          className="absolute top-5 right-7 text-lg cursor-pointer"
          onClick={onclose}
            >
          X
        </button>
    )
} 