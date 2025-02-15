import React from 'react';
import {formatDate} from '@/lib/utils';
import {EyeIcon} from "lucide-react";
import Link from 'next/link';

const ProfessorCard = ({post} : {post : ProfessorTypeCard}) => {
  const { _createdAt, views, author: {author_id, name}, title, category, _id, image} = post;
  return (
    <li className="professor-card group">
      <div className="flex-between">
        <p className="professor_card_date"> 
          {formatDate(_createdAt)}
        </p>
        <div className="flex gap-1.5">
            <EyeIcon className="size-6 text-primary"/>
            <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author_id}`}>
          <p className="text-16-medium line-clamp-1">
            {name}
          </p>
          </Link>
        </div>
      </div>
      
    </li>
  )
}

export default ProfessorCard