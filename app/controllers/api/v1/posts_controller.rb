class Api::V1::PostsController < ApplicationController
  include Rails.application.routes.url_helpers

  def create
    post = Post.new(data: params[:data])
    post.save!
    render json: {success: 1, data: post.data}
  end

  def show
    post = Post.find(params[:id])
    render json: {success: 1, data: post.data}
  end

  def upload_image
    post = Post.find(params[:post_id])
    images = post.images.attach(params[:file])
    image = images.last
    render json: {success: 1, file: { url: url_for(image)}}
  end
end
