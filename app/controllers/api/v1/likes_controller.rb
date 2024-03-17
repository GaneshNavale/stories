class LikesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_post, only: [:create, :destroy]

  def create
    @like = @post.likes.build
    @like.user = current_user

    if @like.save
      head :created
    else
      render json: { error: 'Failed to like post' }, status: :unprocessable_entity
    end
  end

  def destroy
    @like = @post.likes.find_by(user_id: current_user.id)
    @like.destroy if @like
    head :no_content
  end

  private

  def find_post
    @post = Post.find(params[:post_id])
  end
end
