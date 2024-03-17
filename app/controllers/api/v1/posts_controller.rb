class Api::V1::PostsController < ApplicationController
  include Rails.application.routes.url_helpers

  before_action :authenticate_user!, only: [:create, :update, ]
  before_action :user_signed_in?, only: [:show, :index]

  def index
    @posts = Post.includes(:user)
    render json: { success:1, posts: @posts }
  end

  def create
    @post = Post.new(data: params[:data])
    @post.user_id = current_user.id
    @post.save!
    render :show
  end

  def update
    @post = Post.find(params[:id])
    @post.data = params[:data]
    @post.save!
    render :show
  end

  def show
    @post = Post.find(params[:id])
  end

  def upload_image
    post = Post.find(params[:post_id])
    images = post.images.attach(params[:file])
    image = images.last
    render json: {success: 1, file: { url: url_for(image)}}
  end
end
