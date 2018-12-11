class Api::ItemsController < ApplicationController
  before_action :set_department, only: [:index, :update, :destroy]
  before_action :set_item, only: [:show, :create]
  
  def index
    render json: @department.items.all
  end
  
  def show
    render json: @item
  end

  def create
    item = @department.items.new(location_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors}
    end
  end

  def update
    if @item.update(item_params)
      render json: item
    else
      render json: item.errors
    end
  end

  def destroy
    @item.destroy
  end

    private

    def set_department
      @department = Department.find(params[:department_id])
    end

    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:title, :description, :price)
    end
end