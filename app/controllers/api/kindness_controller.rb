class Api::KindnessController < ApplicationController

  def index
    kindness = Kindness.all
    
    render json: {kindness: kindness}
  end

  def create
    new_kindness = Kindness.create(kindness_params)
    render json: new_kindness
  end

  private

  def kindness_params
    params.require(:kindness).permit(:name, :kindness, :date, :location, :lat, :lng)
  end

end
