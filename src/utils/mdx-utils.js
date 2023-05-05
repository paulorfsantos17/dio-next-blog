import {supabase} from '../service/supabase'

export const getPosts = async () => {
  
  const  { data: posts, error } = await supabase
  .from('posts')
  .select()

  if(posts) {
    return posts
  }

  return []

}

export const getPostById = async(id) =>{
  const  { data: post, error } = await supabase
  .from('posts')
  .select().eq('id', id )

  console.log(id)
  if(post[0]) {
    return post[0]
  }

  return []

}