<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * CauldronFuelUsed
 * @ApiResource(attributes={"filters"={"cauldronFuelUsed.search_filter"}})
 * @ORM\Table(name="cauldron_fuel_used", indexes={@ORM\Index(name="IDX_EC72B1E2C16CA547", columns={"cauldron_id"}), @ORM\Index(name="IDX_EC72B1E2E52FF995", columns={"cauldron_kind_id"}), @ORM\Index(name="IDX_EC72B1E2EC8B7ADE", columns={"period_id"})})
 * @ORM\Entity
 */
class CauldronFuelUsed
{
    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime", nullable=true)
     */
    private $date;

    /**
     * @var float
     *
     * @ORM\Column(name="expend", type="float", precision=10, scale=0, nullable=true)
     */
    private $expend;

    /**
     * @var string
     *
     * @ORM\Column(name="comment", type="string", length=255, nullable=true)
     */
    private $comment;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="cauldron_fuel_used_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\Cauldron
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Cauldron")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="cauldron_id", referencedColumnName="id")
     * })
     */
    private $cauldron;

    /**
     * @var integer
     *
     * @ORM\Column(name="period_id", type="integer", nullable=false)
     */
    private $periodId;

    /**
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param \DateTime $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }

    /**
     * @return float
     */
    public function getExpend()
    {
        return $this->expend;
    }

    /**
     * @param float $expend
     */
    public function setExpend($expend)
    {
        $this->expend = $expend;
    }

    /**
     * @return string
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * @param string $comment
     */
    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return Cauldron
     */
    public function getCauldron()
    {
        return $this->cauldron;
    }

    /**
     * @param Cauldron $cauldron
     */
    public function setCauldron($cauldron)
    {
        $this->cauldron = $cauldron;
    }

    /**
     * @return int
     */
    public function getPeriodId()
    {
        return $this->periodId;
    }

    /**
     * @param int $periodId
     */
    public function setPeriodId($periodId)
    {
        $this->periodId = $periodId;
    }



}

