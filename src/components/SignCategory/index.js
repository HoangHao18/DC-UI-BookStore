import SignCategoryItem from "./SignCategoryItem";


export default function SignCategory(){
    return(
        <div className=" sign-category-container">
            <div className="row">
                <div className="col-sm-4 item">
                    <SignCategoryItem
                        img="/assets/images/signCategory01.png"
                        categoryName="explore now" 
                        number=""
                        desc="" 
                        linkTo="/"
                    />
                </div>
                <div className="col-sm-4 item">
                    <SignCategoryItem
                        img="/assets/images/signCategory02.png"
                        categoryName="explore now" 
                        number=""
                        desc="" 
                        linkTo="/"
                    />
                </div>
                <div className="col-sm-4 item">
                    <SignCategoryItem
                        img="/assets/images/signCategory03.png"
                        categoryName="explore now" 
                        number=""
                        desc="" 
                        linkTo="/"
                    />
                </div>
            </div>
        </div>
    )
}