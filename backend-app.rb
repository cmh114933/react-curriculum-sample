require "sinatra"

get "/images" do
  response["Access-Control-Allow-Origin"] = "*"
  imgUrl = "https://picsum.photos/200/300?image="
  images = []
  if params[:userId]
    startNum, endNum = params[:userId].split(",")
    images = (startNum...endNum).to_a.map { |num| imgUrl + num.to_s }
  else
    images = (1..50).to_a.map { |num| imgUrl + num.to_s }
  end
  return images.to_json
end

get "/users" do
  response["Access-Control-Allow-Origin"] = "*"
  return [
           "1,10",
           "11,20",
           "21,30",
           "31,40",
           "41,50",
         ].to_json
end
