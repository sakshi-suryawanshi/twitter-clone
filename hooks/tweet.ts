import { GraphqlClient } from "@/clients/api"
import { CreateTweetData } from "@/gql/graphql"
import { CreateTweetMutation } from "@/graphql/mutation/tweet"
import { getAllTweetsQuery } from "@/graphql/query/tweet"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import toast from "react-hot-toast"



export const useGetAllTweets = () => {
  const query = useQuery({
    queryKey: ["all-tweets"],
    queryFn: () => GraphqlClient.request(getAllTweetsQuery),
  })

  return {...query, tweets:query.data?.getAllTweets};
}

export const useCreateTweet = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    
    //here, apssing payload of input type CreateTweetData, which is defined in server, but we know here bcz of codegen
    mutationFn: (payload: CreateTweetData) => GraphqlClient.request(CreateTweetMutation, {payload}), //passing payload
    onMutate: (payload) => toast.loading('Creating Tweet', {id:'1'}),
    onSuccess: async (payload) => {queryClient.invalidateQueries({ queryKey: ["all-tweets"] }) //means if tweet added then check all tweets and load queryFn related to this queryKey
    toast.success('Success: Created', {id:'1'})
  }
  })

  return mutation;
}