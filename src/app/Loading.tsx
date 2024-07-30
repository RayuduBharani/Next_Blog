import React from 'react'

export default function Loading() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-1/2 h-full flex justify-center items-center space-x-2">
                <div className="loading-wave">
                    <div className="loading-bar"></div>
                    <div className="loading-bar"></div>
                    <div className="loading-bar"></div>
                    <div className="loading-bar"></div>
                </div>
            </div>
        </div>

    )
}
