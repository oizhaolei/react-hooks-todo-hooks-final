import React, { Suspense } from "react";
import fetch from 'isomorphic-unfetch'
import { parseDiff, Diff, Hunk } from 'react-diff-view';
import useSWR from 'swr'
import { Spin } from 'antd';

const renderFile = ({ oldRevision, newRevision, type, hunks, oldPath, newPath }) => (
    <div key={`${oldRevision}-${newRevision}-${oldPath}-${newPath}`} >
        <div>{oldPath} == {newPath}</div>
        <Diff viewType="split" diffType={type} hunks={hunks}>
            {hunks => hunks.map(hunk => <Hunk key={hunk.content} hunk={hunk} />)}
        </Diff>
    </div>
);
const DiffViewer = () => {
    const { data } = useSWR('http://localhost:3001/gitdiff.patch', url => fetch(url).then(res => res.text()), {
        suspense: true,
    });

    const files = parseDiff(data);

    return (
        <>
            {files.map(renderFile)}
        </>
    );
};

export default () => (
    <Suspense fallback={<Spin />}>
        <DiffViewer />
    </Suspense>
);