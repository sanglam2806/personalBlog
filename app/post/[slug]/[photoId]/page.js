"use client"
import React, { useEffect, useState }  from 'react'
import Image from 'next/image';
import {grpahCMSImageLoader} from '../../../../util';
import { graphqlCMS, QUERY_PHOTO_ASSET_BY_ID } from '@services/graphql/Queries';
import Modal from '@components/Modal';

const PhotoPage = ({ params}) => {
  const [photo, setPhoto ] = useState([]);
  const photoId = params.photoId;

  useEffect(() => {
    graphqlCMS.request(QUERY_PHOTO_ASSET_BY_ID, {photoId}).then(result => setPhoto(result.asset));
  },[photoId]);

  return (
    <Modal bg="light">
      <div className='photo_container'>
         <Image
          src={photo?.url}
          loader={grpahCMSImageLoader}
          alt={photo?.url}
          height={100}
          width={100}
          style={{width:'100%', height:'100%', objectFit:'contain'}}
          sizes='20vw'
          priority
          className=""
          unoptimized
        />
      </div>
    </Modal>
  )
}

export default PhotoPage