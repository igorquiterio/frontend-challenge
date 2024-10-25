import { useContext, useState } from 'react'
import { FiltersContainer, InputBox } from './styles'
import * as zod from 'zod'
import { ProductsContext } from '@/context/ProductsContext'
import { type SubmitErrorHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const FilterFormValidadtionSchema = zod.object({
  term: zod.string().optional(),
  category: zod.string().optional(),
  priceMin: zod.number().optional(),
  priceMax: zod.number().optional(),
})

enum Messages {
  term = 'nome',
  category = 'categoria',
  priceMin = 'preço minimo',
  priceMax = 'preço máximo',
}

type FilterFormData = zod.infer<typeof FilterFormValidadtionSchema>

export function FilterComponent() {
  const [message, setMessage] = useState('')

  const { categories, receiveFilterData } = useContext(ProductsContext)

  const FilterForm = useForm<FilterFormData>({
    resolver: zodResolver(FilterFormValidadtionSchema),
    defaultValues: {
      term: '',
      category: '',
      priceMin: 0,
      priceMax: Number.POSITIVE_INFINITY,
    },
  })

  const { handleSubmit, register } = FilterForm

  function handleFilterProducts(data: FilterFormData) {
    if (Number(data?.priceMax) >= Number(data?.priceMin)) {
      setMessage('')
      receiveFilterData(data)
    } else setMessage('O valor Máximo precisa ser maior que o Valor Minimo')
  }

  function onFormError(err: SubmitErrorHandler) {
    const fields = []
    for (const [key] of Object.entries(err)) {
      fields.push(Messages[key as keyof typeof Messages])
    }

    const fieldMessage = `revise o(s) campo(s): ${fields.join(', ')}`
    setMessage(fieldMessage)
  }

  return (
    <form onSubmit={handleSubmit(handleFilterProducts, onFormError)}>
      <FiltersContainer>
        <InputBox>
          <label htmlFor="term">Nome</label>
          <input id="term" placeholder="" {...register('term')} />
        </InputBox>

        <InputBox>
          <label htmlFor="category">Categoria</label>
          <select id="category" {...register('category')} defaultValue={''}>
            <option value="">Todas</option>
            {categories?.map(cat => {
              return (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              )
            })}
          </select>
        </InputBox>

        <InputBox>
          <label htmlFor="priceMin">Preço Minimo</label>
          <input
            id="priceMin"
            type="number"
            placeholder=""
            min={0}
            {...register('priceMin', { valueAsNumber: true })}
          />
        </InputBox>

        <InputBox>
          <label htmlFor="priceMax">Preço Máximo</label>
          <input
            id="priceMax"
            type="number"
            placeholder=""
            min={0}
            {...register('priceMax', { valueAsNumber: true })}
          />
        </InputBox>

        <button type="submit">Filtrar</button>
        <span>{message}</span>
      </FiltersContainer>
    </form>
  )
}
