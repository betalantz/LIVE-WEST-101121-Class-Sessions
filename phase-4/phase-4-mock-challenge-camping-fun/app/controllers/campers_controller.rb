class CampersController < ApplicationController

    def index
        # note: the CamperSerializer doesn't specify relationships to other models, so no associated data will be returned with the camper objects
        render json: Camper.all
    end

    def show
        # if there were other actions on this controller that also needed to find one camper
        # I would abstract this .find into a helper method and run it with a before_action filter
        camper = Camper.find(params[:id])
        # using a custom serializer so that only the single campers returned by this request include their collection of activities
        render json: camper, serializer: CamperWithActivitiesSerializer
    end

    def create
        camper = Camper.create!(camper_params)
        render json: camper, status: :created
    end

    private

    def camper_params
        params.permit(:name, :age)
    end

end
