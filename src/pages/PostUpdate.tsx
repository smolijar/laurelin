import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { usePostLazyQuery, useUpdatePostMutation } from "../generated-types";
import { useParams } from "react-router";

export const PostUpdate = () => {
    const { id } = useParams<{ id?: string }>();
    const [loadDetail, { called, loading, data }] = usePostLazyQuery();
    const [title, setTile] = useState(data?.post?.content ?? '')
    const [save, result] = useUpdatePostMutation({})
    if (id && !called) {
        loadDetail({ variables: { id: id } })
    }
    if (!title && data?.post?.content && title !== data?.post?.content) {
        setTile(data.post.content)
    }


    return (<p>Post update page {id}
        <div><Button onClick={() => save({ variables: { content: title, id } })}>Save</Button></div>
        <div><TextField
            id="standard-multiline-flexible"
            label="Title"
            multiline
            rowsMax={4}
            value={title}
            onChange={e => setTile(e.target.value)}
        /></div><div><SimpleMDE value={title} onChange={setTile} /></div></p>);
}