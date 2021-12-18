class ActivitiesController < ApplicationController

    def index
        render json: Activity.all
    end

    def destroy
        # doing the .find here because no other actions on this controller need to find one camper
        activity = Activity.find(params[:id])
        activity.destroy
        head :no_content
    end
end
