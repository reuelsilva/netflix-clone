import React, { ReactElement } from "react";

interface RowTitleProps{
    children: React.ReactNode
}

export default function RowTitle({children}:RowTitleProps):ReactElement{
    return(
        <h2 className="text-xl mb-4 text-white font-bold">{children}</h2>
    )
}