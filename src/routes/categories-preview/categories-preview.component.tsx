import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';
import { MainPageButton } from './categories-preview.styles';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
      <MainPageButton onClick={() => navigate('/')}>
        to main page
      </MainPageButton>
    </>
  );
};

export default CategoriesPreview;
