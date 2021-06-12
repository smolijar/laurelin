import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { usePostLazyQuery, useUpdatePostMutation } from "../generated-types";

export const PostUpdate = (props: { id?: string }) => {
    const [loadDetail, { called, loading, data }] = usePostLazyQuery();
    const [title, setTile] = useState(data?.post?.content ?? '')
    const [save, result] = useUpdatePostMutation({})
    console.log({ props, called, data })
    if (props.id && !called) {
        loadDetail({ variables: { id: props.id } })
    }
    if (!title && data?.post?.content && title != data?.post?.content) {
        setTile(data.post.content)
    }


    return (<p>Post update page {props.id}
        <div><Button onClick={() => save({ variables: { content: title } })}>Save</Button></div>
        <div><TextField
            id="standard-multiline-flexible"
            label="Title"
            multiline
            rowsMax={4}
            value={title}
            onChange={e => setTile(e.target.value)}
        /></div><div><SimpleMDE value={title} onChange={setTile} /></div></p>);
}