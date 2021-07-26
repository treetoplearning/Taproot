import Head from 'next/head'

export function CheckboxList({lines}) {
  return (
    <div class="font-mono" id="checkboxes">
    <ul>
    {lines.map(line =>   <li className="mb-4"><input class="mr-2 w-4 h-4" key={line} type="checkbox" />{line}</li>)} 
    
    </ul>
  </div>
  )
}
