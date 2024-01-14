class Api::V1::PostsController < ApplicationController
  include Rails.application.routes.url_helpers

  def upload_image
    post = Post.find(params[:post_id])
    images = post.images.attach(params[:file])
    image = images.last
    render json: {sucess: 1, file: { url: url_for(image)}}
  end
end
