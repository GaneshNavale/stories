class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update]
  before_action :find_post, only: [:index, :create, :update, :destroy]
  before_action :find_comment, only: [:update, :destroy]

  def index
    @comments = @post.comments.includes(:user)
  end

  def create
    @comment = @post.comments.build(comment_params)
    @comment.user = current_user

    if @comment.save
      render 'show', status: :created
    else
      render json: { error: 'Failed to create comment' }, status: :unprocessable_entity
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def update
    if @comment.update(comment_params)
      render 'show', status: :ok
    else
      render json: { error: 'Failed to update comment' }, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
    head :no_content
  end

  private

  def find_post
    @post = Post.find(params[:post_id])
  end

  def find_comment
    @comment = @post.comments.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:content)
  end
end
