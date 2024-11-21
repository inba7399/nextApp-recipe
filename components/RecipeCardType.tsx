import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import Image from 'next/image'

const RecipeCardType = ({post}:{post:RecipeCardType}) => {
    
  const {_createdAt,views,author:{_id:authorId ,name},title,category,_id,img,description } = post

  return (
    <li className='recipe-card group'>
        <div className='flex-between'>
           <p className='recipe-card_date'>
             { formatDate(_createdAt) }
           </p>
           <div className='flex gap-1.5'>
            <EyeIcon className='size-6 text-primary'/>
            <span className='text-16-medium'>{views}</span>
           </div>
        </div>
        <div className='flex-between mt-5 gap-5'>
          <div className='felx-1'>
            <Link href={`/user/${authorId}`}>
             <p className='text-16-medium line-clamp-1'>{name}</p>
            </Link>
            <Link href={`/recipe/${_id}`}>
             <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
            </Link>
          </div>
          <Link  href={`/user/${authorId}`}>
            <Image src='https://placehold.co/48x48' alt='pl' width={48} height={48} className='rounded-full' />
          </Link>
        </div>
        <Link href={`/recipe/${_id}`}>
          <p className='recipe-card_desc'>
             {description}
          </p>
          <img src={img} alt="pl" className='recipe-card_img' />
        </Link>
        <div className='flex-between gap-3 mt-5'> 
          <Link href={`/?quary=${category.toLowerCase()}`}>
           <p className='text-16-medium'>{category}</p>
          </Link>
          <Button className='recipe-card_btn' asChild>
            <Link href={`/recipe/${_id}`}>
              Full recipe
            </Link>
          </Button>
        </div>
    </li>
  )
}

export default RecipeCardType